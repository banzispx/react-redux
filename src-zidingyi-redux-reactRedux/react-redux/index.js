import React from 'react'
// 自定义实现react-redux 
// 一个是provider Api 一个是connect Api
/*
  provider Api
    接受store属性 让所有的容器组件都可以看到store 通过context来实现
  connect函数
  接受两个参数 mapStateTopROPS MapDispatchToProps
*/ 
// 创建context
let storeContext = React.createContext()
export class Provider extends React.Component {
  render() {
    // 返回渲染
    return <storeContext.Provider value={this.props.store}>{this.props.children}</storeContext.Provider>
  }
}
// connect高阶函数 接受两个参数 mapStateToProps MapDispatchToProps
// 返回一个高阶组件函数
export function connect(mapStateToProps, mapDispatchToProps) {
  // 返回
  return (UIComponent) => {
    return class ContainerComponent extends React.Component{
      // 声明接受的context数据的名称和类型
      static contextType = storeContext
      constructor (props, context){
        super(props)
        // 得到store
        const store = context;
        console.log(store, 'store', context);
        // 得到包含所有一般属性的对象 mapStateToProps 传入store 返回 需要传递给UI组件的 store对象中的属性
        const stateProps = mapStateToProps(store.getState())
        this.state = {...stateProps}
        // 得到包含所有函数属性的对象 mapDispatchToProps 传入dispatch 返回一个包含方法的对象
        /*
          mapDispatchToProps = (dispatch) => ({
            increment: (number) =>dispatch(increment(number))
          })
        */
       // 这里的mapDispatchToProps有两种，一种是函数，一种是对象
       let dispatchProps
       if (typeof mapDispatchToProps==='function') {
         dispatchProps = mapDispatchToProps(store.dispatch)
       } else {
        /*
          {increment} 转化成下面的样子
          const mapDispatchToProps = (dispatch) => ({
            increment: (number) =>dispatch(increment(number))
          })  
        */
         dispatchProps = Object.keys(mapDispatchToProps).reduce((pre, key) => {
          const actionCreator = mapDispatchToProps[key]
          pre[key] = (...args) => store.dispatch(actionCreator(...args))
          return pre
         }, {})
       }
        this.dispatchProps = dispatchProps
        // 绑定store 的state变化的监听、
        store.subscribe(() => {//store内部的状态数据发生变化
          // 更新容器组件 =》 更新UI组件
          this.setState({
            ...mapStateToProps(store.getState())
          })
        })
      }
      render() {
        return <UIComponent {...this.state} { ...this.dispatchProps}/>
      }
    }
  }
}