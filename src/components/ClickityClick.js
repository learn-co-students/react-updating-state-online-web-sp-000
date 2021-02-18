// Code ClickityClick Component Here

import React from 'react';

class ClickityClick extends React.Component{
    constructor(){
        super();

        //define initial state
        this.state = {
            hasBeenClicked: false,
            currentTheme: 'blue',
        };
    }

    handleClick = () => {
        //update state here...
        this.setState(previousState => {
            return {
                hasBeenClicked: !previousState.hasBeenClicked
            }
        }, () => console.log(this.state.hasBeenClicked)) //prints false
    };

    render() {
        return (
            <div>
                <p>I have {this.state.hasBeenClicked ? null : "not"} been clicked! </p>
                <button onClick = {this.handleClick}>Click Me!</button>
            </div>
        );
    }
}

export default ClickityClick;



