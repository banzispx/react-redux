## redux 自己实现

  核新的API  createStore、combineReducers 

 ## createStore 传入reducers，返回state对象，此对象有三个函数
```
export function createStore(reducer) {
  let state = reducer(undefined, {type: '@@redux/init'})
  // 用来存储监听state更新回调函数的数组容器
  let listeners = [] 
  // 返回当前内部的state数据
  function getState(params) {
    return state
  }
// 分发action 触发reducer调用,得到新的state,保存新的state， 调用所有已存在的监视回调
  function dispatch(action) {
    // 触发reducer，得到新的state
    const newState = reducer(state, action)
    // 保存新的state，
    state = newState
    // 调用所有已存在的监视回调
    listeners.forEach(listener => listener())

  }
  // 绑定内部state改变的监听回调 可以给一个store绑定多个监听
  function subscribe(listener) {
    listeners.push(listener)
  }
  return {
    getState, 
    dispatch,
    subscribe
  }
}
```

### combineReducers 传入reducer对象，返回一个总的reducer 

```
export function combineReducers(reducers) {
  return (state = {}, action) => {
    // console.log('combineReducers');
    const newState = Object.keys(reducers).reduce((preState, key) => {
      preState[key] = reducers[key](state[key], action)
      return preState
    }, {})
    return newState
  }
}
```

