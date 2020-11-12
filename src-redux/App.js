
import React, { Component } from 'react'
export default class App extends Component {
  increment = () =>{
    this.props.store.dispatch({
      type: 'INCREMENT',
      data: 1
    })
  }
  render() {
    // console.log(this.props, 'asda');
    return (
      <div>
        {this.props.store.getState()}
        <button onClick={this.increment}>++</button>
      </div>
    )
  }
}