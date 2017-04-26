import React from 'react';

class Playback extends React.Component {

  render() {
    return (

      <div>
        <video
        autoPlay
        ref='playbackVideo'
        src={this.props.src}
        controls={true}
        style={{width: 320, height: 240}}
        />
      </div>
    )
  }
}

export default Playback;
