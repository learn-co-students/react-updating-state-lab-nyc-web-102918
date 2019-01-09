// Code DigitalClicker Component Here
import React, {Component} from "react"

export default class DigitalClicker extends Component {
  state = {
    timesClicked: 0
  }

  handleClick = () => {
    const addClick = (currentState) => {
      return {
        timesClicked: currentState.timesClicked + 1
      }
    }
    this.setState(addClick)
  }

  render() {
    return (
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    )
  }
}
