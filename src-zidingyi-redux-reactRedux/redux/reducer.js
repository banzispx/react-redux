// reducer的作用，根据当前的state和指定的action返回一个新的state
import {combineReducers} from '../reduxLib/index'
// import {combineReducers} from 'redux'
 function count(state=1, action) {
  console.log('count', action);
  switch (action.type) {
    case 'INCREMENT':
      
      return state + action.data
    case 'DEL':
    
      return state - action.data
    default:
      return state;
  }
}
 function user(state={}, action) {
   console.log('user', action);
  switch (action.type) {
    case 'INCREMENT':
      
      return state;
    default:
      return state;
  }
}
export default combineReducers({
  count, 
  user
})