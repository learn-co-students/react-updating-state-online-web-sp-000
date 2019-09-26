// Code ClickityClick Component Here
import React from 'react';

class ClickityClick extends React.Component {
    constructor() {
        super();

        //Define the initial state:
        this.state = {
            hasBeenClicked: false
        };
    }

    handleClick = () => {
        //Update our state here
        this.setState({
            hasBeeClicked: true
        }, () => console.log(this.state.hasBeenClicked))
    }
   
    

    render() {
        return (
            <div>
                <p>I have {this.state.hasBeeClicked ? null : 'not'} been clicked!</p>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        );
    }
}

export default ClickityClick;