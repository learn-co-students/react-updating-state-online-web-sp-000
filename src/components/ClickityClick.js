// Code ClickityClick Component Here
import React, { Component } from 'react'

class ClickityClick extends Component {
  constructor() {
    super()

    this.state = {
      count: 0
    }
  }

  handleClick = () => {
    this.setState(previousState => {
      return {
        count: previousState.count + 1
      }
    })
  }

  render() {
    return(
    <div>
      <h1>{ this.state.count }</h1>
      <button onClick={ this.handleClick }>Click me!</button>
    </div>
    )
  }
}

export default ClickityClick