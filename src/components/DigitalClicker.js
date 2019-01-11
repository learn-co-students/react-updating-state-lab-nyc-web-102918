// Code DigitalClicker Component Here
import React from 'react'

class DigitalClicker extends React.Component {


state = {
  timesClicked: 0
}

//Whenever the button is clicked, update the state by incrementing the timesClicked by 1.
handleClick= () => {
  this.setState({timesClicked: this.state.timesClicked + 1})
}
//The component renders out a button with a label that shows the timesClicked value.
//This means that, at the start, your button should just say 0.

render() {
  return <button onClick={this.handleClick}>{this.state.timesClicked}</button>
}

}

export default DigitalClicker
