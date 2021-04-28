// Code ClickityClick Component Here

// src/components/ClickityClick.js
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
 
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
 
import ClickityClick from './components/ClickityClick';
 
ReactDOM.render(<ClickityClick />, document.getElementById('root'));
To update our state, we use this.setState() and pass in an object. This object will get merged with the current state. When the state has been updated, our component re-renders automatically. Handy!

// src/components/ClickityClick.js
...
 
handleClick = () => {
  this.setState({
    hasBeenClicked: true
  })
}
 
...