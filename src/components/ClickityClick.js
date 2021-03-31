// Code ClickityClick Component Here
import React, {Component} from 'react';

export default class ClickityClick extends Component {
    constructor()  {
        super()
        this.state = {
            // hasBeenClicked = false
            toggled: false
        }
    }

    handleClick = () => {
        this.setState(previousState => {
            // hasBeenClicked = true
            return{
                toggled: !previousState.toggled
            }
        })
    }

    render() {
        return (
            <div>
                {/* <p>I have been {this.state.hasBeenClicked ? null : "not"} clicked</p>
                <button onClick={this.handleClick}>Click Me!</button> */}
                <button onClick={this.handleClick}>{this.state.toggled ? "ON" : "OFF"}</button>
            </div>
        )
    }
}