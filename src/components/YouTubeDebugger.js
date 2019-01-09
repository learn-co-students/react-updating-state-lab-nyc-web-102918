import React, { Component } from 'react';

class YouTubeDebugger extends Component {

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

  handleClick = (event) => {
    if (event.target.name === "bitrate") {
      this.setState({
        settings: {
          ...this.state.settings,
          bitrate: 12
        }
      })
      console.log(this.state);
    }
    else if (event.target.name === "resolution") {
      this.setState({
        settings: {
          ...this.state.settings,
          video: {
            ...this.state.settings.video,
            resolution: '720p'
          }
        }
      })
      console.log(this.state);
    }
  }

  render() {
    return (
      <div>
      <button name="bitrate" onClick={this.handleClick}> Change Bitrate </button>
      <button name="resolution" onClick={this.handleClick}> Change Resolution </button>
      </div>
    );
  }

}

export default YouTubeDebugger;
