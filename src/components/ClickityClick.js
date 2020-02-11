// Code ClickityClick Component Here
import React from 'react';


class ClickityClick extends React.Component {
    constructor() {
        super()
        this.state = {
           count: 0
        };
    }

    handleClick = () => {
        let newCount = this.state.count + 1
        this.setState({
            count: newCount
        }, () => console.log(this.state.count));
        console.log(this.state.count);
    }

    render() {
        return(
            <div>
                <p>I have been clicked {this.state.count} times!</p>
                <button onClick={this.handleClick} >click me!</button>
            </div>
        )
    }
}

export default ClickityClick;