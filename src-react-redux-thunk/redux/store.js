import {createStore, applyMiddleware} from 'redux'
// redux-thunk 主要用来实现redux的异步操作 应用redux的applyMiddleware来实现
import thunk from 'redux-thunk'
import reducer from './reducer'
export default createStore(reducer, applyMiddleware(thunk))