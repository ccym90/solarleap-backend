import React from 'react';
import { captureUserMedia } from '../App.js';
import { connect } from 'react-redux';
import { streaming } from '../redux/actions';


const hasGetUserMedia = !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
                        navigator.mozGetUserMedia || navigator.msGetUserMedia);

class Webcam extends React.Component {

  // this.requestUserMedia = this.requestUserMedia.bind(this);
  constructor(props) {
  super(props);

  // this.state = {
  //   recordVideo: null,
  //   src: null,
  //   preview: null,
  //   download: null,
  //   recording: false,
  //   recorded: false,
  //   downloaded: false,
  //   uploadSuccess: null,
  // };

  }

  componentDidMount() {
    if(!hasGetUserMedia) {
      alert("Your browser cannot stream from your webcam. Please switch to Chrome or Firefox.");
      return;
    }
    this.requestUserMedia();
  }

  requestUserMedia() {
    let {dispatch} = this.props;
    console.log('requestUserMedia')
    captureUserMedia((stream, options) => {
      let src = window.URL.createObjectURL(stream);
      dispatch(streaming(src));
      console.log('setting state', src)
    });
  }



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

export default connect()(Webcam);
