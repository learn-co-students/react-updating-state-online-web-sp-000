// Code ClickityClick Component Here
handleClick = () => {
  this.setState({hasBeenClicked: true}, () => console.log(this.state.hasBeenClicked));
}
