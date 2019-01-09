// Code DigitalClicker Component Here
import React from "react"

export default class DigitalClicker extends React.Component {
  state = {
    timesClicked: 0
  }

  handleClick = () => {
    this.setState((state) => {
      return {timesClicked: state.timesClicked + 1}
    })
  }

  render() {
    return(
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    )
  }

}
