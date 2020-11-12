import {creat} from '../reduxLib/index'
import reducer from './reducer'

console.log( 'creat(reducer), createStore(reducer)');
export default creat(reducer)