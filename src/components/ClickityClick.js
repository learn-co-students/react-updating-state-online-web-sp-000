// Code ClickityClick Component Here
import React from 'react';
 
class ClickityClick extends React.Component {
  constructor() {
    super();
 
    // Define the initial state:
    //state is reserved for data changes in our component visibile in the UI.
    this.state = {
      hasBeenClicked: false
    };
  }
 
  //Update state by passing in an object 
  //available to all react components STATE HAS CHANGED!
  handleClick = () => {
    this.setState({ 
      hasBeenClicked: true
      currentTheme: 'blue',
      console.log(this.state.hasBeenClicked); 
    })
  }
 
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
 
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
 
import ClickityClick from './components/ClickityClick';
 
ReactDOM.render(<ClickityClick />, document.getElementById('root'));