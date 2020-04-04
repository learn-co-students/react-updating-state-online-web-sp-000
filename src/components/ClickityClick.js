import React from 'react';

export default class ClickityClick extends React.Component {
    constructor() {
        super();
        this.state = {
            hasBeenClicked: false,
            currentTheme: 'blue',
        };
    };

    handleClick = () => {
        this.setState({
            hasBeenClicked: true,
            currentTheme: 'blue',
        }, () => this.state.hasBeenClicked);
    };

    render() {
        return (
            <div>
                <p>I have {this.state.hasBeenClicked ? null : 'not'} been Clicked!</p>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        );
    };
}