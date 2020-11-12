
import React, { Component } from 'react'
export default class App extends Component {
  increment = () =>{
    console.log(this.props, 'asda');
    this.props.increment()
  }
  incrementAsync = () =>{
    console.log(this.props, 'asda');
    this.props.incrementAsync()
  }
  render() {
    return (
      <div>
        {this.props.count}
        <button onClick={this.increment}>++同步</button>
        <button onClick={this.incrementAsync}>++Async</button>
      </div>
    )
  }
}