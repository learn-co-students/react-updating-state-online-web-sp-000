import React from 'react'

class LightSwitch extends React.Component {
  constructor() {
    super()
    this.state = { on: false }
  }

  handleClick = () => {
    this.setState(prevState => ({ on: !prevState.on }))
  }

  // handleClick = () => {
  //   this.setState(prevState => {
  //     return {
  //       on: !prevState.on
  //     }
  //   })
  // }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.on ? "ON" : "OFF"}
        </button>
      </div>
    )
  }
}

export default LightSwitch
