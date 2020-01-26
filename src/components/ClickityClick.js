// Code ClickityClick Component Here
import React, { Component } from 'react'

export default class ClickityClick extends Component {

    // Before:
    // constructor() {
    //     super();
    //
    //     // Define the initial state:
    //     this.state = {
    //         hasBeenClicked: false
    //     };
    // }
    //
    //
    // handleClick = () => {
    //     // Update state here...
    //     this.setState({
    //         hasBeenClicked: true
    //     })
    // };
    //
    // render() {
    //     return (
    //     <div>
    //         <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
    //         <button onClick={this.handleClick}>Click me!</button>
    //     </div>
    //     );
    // }

    // ------------------------------------------------------------------------

    // After:
    constructor() {
        super();

        // Initial state is defined
        this.state = {
            toggled: false
        };
    }

    // when handleClick is called,
    // setState will update the state so that toggle is reversed
    handleClick = () => {
        this.setState(previousState => {
            return {
                toggled: !previousState.toggled
            }
        })
    }

    render() {
        return (
        <div>
            <button onClick={this.handleClick}>{this.state.toggled ? "ON" : "OFF"}</button>
        </div>
        );
    }

}
