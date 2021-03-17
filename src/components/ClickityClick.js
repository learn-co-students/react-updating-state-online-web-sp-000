import React from 'react'

class ClickityClick extends React.Component {
  constructor() {
    super()
    this.state = { clicked: false }
  }

  handleClick = () => {
    this.setState(
      { clicked: true },
      () => console.log(this.state.clicked)
    )
  }

  render() {
    return (
      <div>
        <p>I have {this.state.clicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    )
  }
}

export default ClickityClick
