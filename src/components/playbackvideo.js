import React, { Component } from 'react';
import '../pages/recordpage.css';

class Playback extends Component {

  render() {
    return (

      <div className="previewVid">
        <video
        autoPlay
        ref='playbackVideo'
        src={this.props.src}
        style={{width: 320, height: 240}}
        />
      </div>
    )
  }
}

export default Playback;
