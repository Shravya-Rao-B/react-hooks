/* Implementing as class comp */
import React, { Component } from 'react'

export class ClassCounter extends Component {
constructor(props){
    super(props)
    this.state = {
        count : 0
    }
}
 increment = () => {
    console.log('called');
    return this.setState({count: this.state.count + 1});
}
  render() {
    return (
        <div>
    <button onClick={this.increment}>Increment</button>
      <div>{this.state.count}</div>
      </div>
    )
  }
}

export default ClassCounter;