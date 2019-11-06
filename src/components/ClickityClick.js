// Code ClickityClick Component Here
import React from 'react'

export default class ClickityClick extends React.Component {
    constructor() {
        super()

    //define initial state
        this.state = {
        hasBeenClicked: false
        }   
    }

    handleCLick = () => {
        // update state here
        this.setState({
            hasBeenClicked: true
        })
    }

    render() {
        return(
            <div>
                <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
                <button onClick={this.handleCLick}>Click me!</button>
            </div>
        )
    }
}



