import React from 'react';
 
class ClickityClick extends React.Component {
  constructor() {
    super();
 
    // Define the initial state:
    this.state = {
      toggled: false
    };
  }
 
  handleClick = () => {
    // Update our state here...
    // State changes, however instant they might appear, happen asynchronously. If we want to access our new state after it has been updated, we can optionally add a callback as a second argument to the this.setState() function. This callback will fire once the state has been updated, ensuring that this.state is now the new, shiny updated state.
    // when handleClick is called, setState will update the state so that toggle is reversed
    this.setState(previousState => {
        return {
            toggled: !previousState.toggled
        }
    })
  };
 
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.toggled ? "ON" : "OFF"}</button>
      </div>
    );
  }
}
 
export default ClickityClick;
