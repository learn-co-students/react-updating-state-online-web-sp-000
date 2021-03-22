import React, {Component} from 'react';
 
class ButtonCounter extends Component {
  constructor() {
    super()
    
    this.state = {
      count: 0
    }
  }
 
  handleClick = () => {
    
    let newCount = this.state.count + 1
    this.setState({
      count: newCount
    })
  }
 
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    )
  }
}
 
export default ButtonCounter