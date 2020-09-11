import React, { Component } from 'react';

class ClickityClick extends Component {
  constructor() {
    super();

    this.state = {
      hasbeenClicked: false
    };

    handleCLick = () => {
      this.setState({
        hasBeenClicked: true
      })
    };
  }

  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick>Click me!</button>
      </div>
    );
  }
}

export default ClickityClick
