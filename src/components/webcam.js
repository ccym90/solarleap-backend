import React from 'react';

class Webcam extends React.Component {

  render() {
    return (
      <div>
      <video
      ref='video'
      autoPlay
      src={this.props.src}
      style={{width: 320, height: 240}}
      />
      </div>
    )
  }
}

export default Webcam;
