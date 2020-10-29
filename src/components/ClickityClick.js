// Code ClickityClick Component Here
import React, {Component} from 'react';

export default class ClickityClick extends Component {
    constructor(props) {
        super(props)
        this.state = {
            toggled: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

     
  handleClick = () => {
    this.setState(previousState => {
        return {
            toggled: !previousState.toggled
        }
        
    })
    //console.log(this.state.toggled);
  };
 
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.toggled ? "ON" : "OFF"}</button>
        
      </div>
    );
  }
}