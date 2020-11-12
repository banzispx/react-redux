import {INCREMENT} from './actionType'
// 同步返回对象
export const increment = () => {
  return {
    type: INCREMENT,
    data: 1
  }
}
// 异步返回函数
export const incrementAsync = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment())
    }, 1000);
  }
}