// 自定义实现redux库
/*
redux库主要的Api 
  createStore

*/

// createStore 接受的参数是reducer函数，返回store对象
// store 对象里面有三个方法 gitState dispatch subscript

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

// 整合传入参数对象中的多个reducer函数，返回一个新的reducer管理总的状态
/*
  下面这个函数的主要功能 就是把下面的对象
  {
    count: (state = 1, action) => {},
    user: (state = {}, action) => {},
  }
  换成
  (state = {}, action) => {
    const newState = Object.keys(reducers).reduce((preState, key) => {
      preState[key] = reducers[key](state[key], action)
      // console.log(5555);
      return preState
    }, {})
    return newState
  }，
  这个函数的主要功能就是接受state和action返回新的state
*/ 

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


export function creat (reducers) {
  console.log('creat 执行');
  let state = reducers(undefined, 'spx')
  let subArr = []
  function getState(params) {
    return state 
  }
  function dispatch(action) {
    console.log(action ,state, 'action');
    let newState = reducers(state, action)
    state = newState
    subArr.forEach(Item => {Item()})
  }
  function subscribe(callback) {
    subArr.push(callback)
  }
  return {
    getState,
    dispatch,
    subscribe
  }
}