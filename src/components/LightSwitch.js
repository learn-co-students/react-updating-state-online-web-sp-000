import React, { Component } from 'react'

class LightSwitch extends Component {
  constructor() {
    super()

    this.state = {
      toggled: false
    }
  }

  handleClicked = () => {
    this.setState(previousState => {
      return {
        toggled: !previousState.toggled
      }
    })
  }

  render() {
    return (
      <div> 
        <button onClicked={ this.handleClicked }>{ this.state.toggled ? "on" : "off"}

        </button>

      </div>
    )
  }
}


export default LightSwitch