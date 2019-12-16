import React, { Component } from 'react';

export default class LightSwitch extends Component {
  constructor() {
    super();
    this.state = {
      toggled: false
    }
  }

  handleClick = () => {
    this.setState(previousState => {
      return {
        toggled: !previousState.toggled
      }
    });
  }

  render() {
    return(
      <div>
        <p>The lights are {this.state.toggled ? 'on' : 'off'}!</p>
        <button onClick={this.handleClick}>Light Switch</button>
      </div>
    );
  }
}
