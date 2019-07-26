// Code ClickityClick Component Here
import {Component} from 'react';

export default class ClickityClick extends Component {
  constructor(props){
    super(props);
    this.state = {
      hasBeenClicked: false
    }
  }

  handleClick = () => {
    this.setState({hasBeenClicked: true});
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