// Code YouTubeDebugger Component Here
import React from "react"

export default class YouTubeDebugger extends React.Component{
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

handleBitrateChange = () => {
  this.setState({
    settings: {...this.state.settings, bitrate: 12}
  })
}


handleResolutionChange = () => {
 this.setState({
  settings: {...this.state.settings,
    video: {...this.state.settings.video, resolution: '720p'}
    //in order to get the inner object to change, I have to start at the outer object and work inward
  }
 })
}

render() {
  console.log(this.state.settings)
  console.log(this.state.settings.video)
  return(
    <div>
      <button className="bitrate" onClick={this.handleBitrateChange}>bitrate</button>
      <button onClick={this.handleResolutionChange} className="resolution">resolution</button>
    </div>
  )
}

}
