// Code ClickityClick Component Here
import React, { Component } from 'react'

export default class ClickityClick extends Component {
    constructor(props) {
        super(props)
        this.state={
            // hasBeenClicked: false
            toggled: true
        }
    }

    // hasBeenClicked = () => {
    //     !!this.state.clicked
    // }
    handleClick = () => {
        // this.setState({
        //     hasBeenClicked: true
        // })
        // console.log(this.state.hasBeenClicked); // prints false
        // this.setState({
        //     hasBeenClicked: true
        //   }, () => console.log(this.state.hasBeenClicked)) // prints true
        this.setState( previousState => {
            return {
                toggled: !previousState.toggled
            }
        })
    }

    render () {
        return (
        <div>
        {/* <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click Me!</button> */}
        <button onClick={this.handleClick}>{this.state.toggled ? "ON" : "OFF"}</button>
        </div>
        )
    }
}
