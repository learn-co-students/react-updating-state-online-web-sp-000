// Code ClickityClick Component Here
import React from 'react'

export default class ClickityClick extends React.Component {

  constructor() {
    super ()
    this.state = {
      // hasBeenClicked: false,
      // otherAttribute: false,
      // anotherAttribute: "some text"
      toggle: true
    }
  }

  clickHandler = () => {
    // console.log(this.state)
    // this.setState({
    //   hasBeenClicked: true,
    //   anotherAttribute: "some Other Text"
    // })
    this.setState(prevState => {
      return {
        toggle: !prevState.toggle
      }
    })
  }

  render() {
    return(
      <div>
        <p> I have been currently {this.state.toggle? "True" : "False"} </p>
        {/*<p>I have {this.state.hasBeenClicked? null : 'not'} been clicked!</p>*/}
        <button onClick={this.clickHandler}>Click me!</button>
      </div>
    )
  }
}
