import React from 'react';
import { captureUserMedia } from '../App.js';


const hasGetUserMedia = !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
                        navigator.mozGetUserMedia || navigator.msGetUserMedia);

class Webcam extends React.Component {

  constructor(props) {
  super(props);

  this.state = {
    recordVideo: null,
    src: null,
    preview: null,
    download: null,
    uploadSuccess: null,
    isRecording: false,
    recorded: false,
    downloaded: false,
  };

  this.requestUserMedia = this.requestUserMedia.bind(this);
  }

  componentDidMount() {
    if(!hasGetUserMedia) {
      alert("Your browser cannot stream from your webcam. Please switch to Chrome or Firefox.");
      return;
    }
    this.requestUserMedia();
  }

  requestUserMedia() {
    console.log('requestUserMedia')
    captureUserMedia((stream, options) => {
      this.setState({ src: window.URL.createObjectURL(stream) });
      console.log('setting state', this.state)

    });
  }



  render() {
    return (
      <div>
      <video
      ref='video'
      autoPlay
      src={this.state.src}
      style={{width: 320, height: 240}}
      />
      </div>
    )
  }
}

export default Webcam;
