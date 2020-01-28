// Code ClickityClick Component Here
import React from 'react';
 
class ClickityClick extends React.Component {
  constructor() {
    super();
 
    // Define the initial state:
    this.state = {
      hasBeenClicked: false
    };
  }
 
  handleClick = () => {
    // Update our state here...
    this.setState({
        hasBeenClicked: true
      }, () => console.log(this.state.hasBeenClicked))
      //F.I. description = state changes even tho appear instant are async so this state will stay false
      //to see after the fact can add a callback function to the params of this.setState as above
      console.log(this.state.hasBeenClicked);

  };
 
  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}
 
export default ClickityClick;