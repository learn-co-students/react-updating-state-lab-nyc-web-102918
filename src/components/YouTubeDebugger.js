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
  let copy = Object.assign({}, this.state.settings);
  copy.video.resolution = '720p'
 this.setState({
   settings: copy
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
// Code YouTubeDebugger Component Here
