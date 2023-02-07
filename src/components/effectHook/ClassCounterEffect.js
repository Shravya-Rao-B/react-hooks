import React, { Component } from 'react'

export class ClassCounterEffect extends Component {
  constructor(props){
    super(props);
    this.state = {
        count: 0
    }
  }
  componentDidMount(){
     document.title = `You clikced ${this.state.count} times`;
  }
  componentDidUpdate(prevProps, prevState){
    console.log("in comp update");
    document.title = `You clicked ${this.state.count} times`;
  }
  increase = () => {
    this.setState({count: this.state.count + 1});
  }
  render() {
    return (
      <div>
        <button onClick={this.increase}>counter now: {this.state.count}</button>
      </div>
    )
  }
}

export default ClassCounterEffect