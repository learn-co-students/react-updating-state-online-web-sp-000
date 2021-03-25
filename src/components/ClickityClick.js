import React, { Component } from 'react'

class ClickityClick extends Component {
    super()
    constructor () {
        this.state = {
            hasBeenClicked: false
        }

    }
    handleClick = () => {
        this.setState({
            hasBeenClicked: true
        })
    }

    render() {
        return (
            <div>
                <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!
                </p>
                <button onClick={this.handleClick}>Click Me!</button>
            </div>
        )
    }
}
export default ClickityClick