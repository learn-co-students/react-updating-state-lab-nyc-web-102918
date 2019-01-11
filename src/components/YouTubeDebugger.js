//Code YouTubeDebugger Component Here
import React from 'react'


class YouTubeDebugger extends React.Component {

  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: '1080p'
      }
    }

  }

  //Create a button with the class 'bitrate'. Clicking this button changes the settings.bitrate state
  //property to 12.

  handleClick= () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
    console.log(this.state)

  }

  //Create a button with the class 'resolution'. Clicking this button changes the
  //settings.video.resolution state property to '720p'.

  handleClick2= () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
        resolution: '720p'
        }
      }
    })

  }


render() {
  return (
  <div>
    <button className='bitrate' onClick={this.handleClick}>bitrate</button>
    <button className='resolution' onClick={this.handleClick2}>resolution</button>
  </div>
  )}


}

export default YouTubeDebugger
