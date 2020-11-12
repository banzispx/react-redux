import {connect} from 'react-redux'
import {increment, incrementAsync} from './redux/actions'
import counter from './counter'
export default connect(
  state=>({count: state}),
  {increment, incrementAsync}
)(counter)