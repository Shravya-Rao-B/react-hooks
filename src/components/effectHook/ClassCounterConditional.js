import React, { Component } from 'react'

export class ClassCounterConditional extends Component {
constructor(props){
    super(props);
    this.state = {
        count : 0,
        name :''
    }
    this.incrementCounter = this.incrementCounter.bind(this);
    this.updateNameValue = this.updateNameValue.bind(this);
}
componentDidMount(){
    document.title = `You clicked ${this.state.count} times`
}
/* Without conditional rendering, the setting of document.title part would run everytime 
there is change in the state of 'name' as well though this needs to be run only on chnage of 'count'  
componentDidUpdate(){
    document.title = `You clicked ${this.state.count} times`
    console.log('updated document title');
    console.log('updated state name');
}
*/
componentDidUpdate(prevProps, prevState){
    if(prevState.count !== this.state.count) 
    {
    document.title = `You clicked ${this.state.count} times`;
    console.log('updated document title');
    }
    console.log('updated state name');
}

incrementCounter(){
    this.setState({count : this.state.count + 1})
}
updateNameValue(e){
    this.setState({name: e.target.value})
}
  render() {
    return (
      <div>
        <input type="text" value={this.state.name} onChange={e => this.updateNameValue(e)} />
        <button onClick={this.incrementCounter}>Counter {this.state.count}</button>
      </div>
    )
  }
}

export default ClassCounterConditional