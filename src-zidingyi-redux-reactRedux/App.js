
import React, { Component } from 'react'
import {connect} from './react-redux/index'
import {increment} from './redux/actions'
 class App extends Component {
  increment = () =>{
    this.props.increment()
  }
  render() {
    // console.log(this.props, 'asda');
    return (
      <div>
        {this.props.count}
        <button onClick={this.increment}>++</button>
      </div>
    )
  }
}
// const mapDispatchToProps = (dispatch) => ({
//   increment: (number) =>dispatch(increment(number))
// })
export default connect(
  state => ({count: state.count}),
  // mapDispatchToProps
  {increment}
)(App)