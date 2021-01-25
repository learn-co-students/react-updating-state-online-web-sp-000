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
      this.setState(previousState => {
          return {
              count: previousState.count + 1
            //   Instead of passing an object into setState like below, we can also pass a function. When called inside setState, that function will be passed the component state from when that setState was called....i.e. "previous state"
            // We also eliminate the need for a separate variable assignment like let newCount = this.state.count + 1
          }
      })
    // this.setState({
    //     hasBeenClicked: true
    // }, () => console.log(this.state.hasBeenClicked))
  }
//   Since state changes happen asynchronously, if we want to access the new state after it's been updated, we are adding a callback as a second argument to the this.setState() function. This callback fires once the state has been updated.

 
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