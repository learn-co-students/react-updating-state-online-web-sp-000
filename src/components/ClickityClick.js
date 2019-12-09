import React from 'react';

class ClickityClick extends React.Component {
	
	constructor() {
    super()
    this.state = {
			hasBeenClicked: false,
			count: 0,
			toggled: false
    }
	};
	
	handleClick = () => {
		this.setState({
			hasBeenClicked: true,
			count: this.state.count + 1,
			toggled: !this.state.toggled 	
		})
	}

	render() {
		console.log("We Hit Render")
		console.log(this.state.hasBeenClicked)
		return(
			<div>
				<p> I have {this.state.hasBeenClicked ? null : 'not'} been clicked! </p>
				<p> Click Counter {this.state.count} </p>
				<button onClick={this.handleClick}> Click me! {this.state.toggled ? 'ODD' : 'EVEN'} </button>
			</div>
		)
	}
}

export default ClickityClick;