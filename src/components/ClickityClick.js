// Code ClickityClick Component Here
import React from 'react' 


export default class ClickityClick extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            hasBeenClicked: false
        }
    }

    handleClick = () => {
        this.setState(previousState => {
            return {
                hasBeenClicked: !previousState.hasBeenClicked
            }
           
        }, console.log(this.state.hasBeenClicked))
        
    };

    render(){
        return(
            <div>
                <p>I have {this.state.hasBeenClicked ? null:"not"} been clicked!</p>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        )
    }
}