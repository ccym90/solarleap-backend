import React from 'react';
import { captureUserMedia } from '../App.js';
import { connect } from 'react-redux';
import { streaming } from '../redux/actions';


const hasGetUserMedia = !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia || navigator.msGetUserMedia);


class Webcam extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      constraints: {video: true, audio: true}
    }
    this.requestUserMedia = this.requestUserMedia.bind(this);
  };

  componentDidMount() {
    const constraints = this.state.contraints;
    console.log('mounted!');
    if(!hasGetUserMedia) {
      alert("Your browser cannot stream from your webcam. Please switch to Chrome or Firefox.");
      return;
    }
    this.requestUserMedia();
  }

  requestUserMedia() {
    const constraints = this.state.constraints;
    let {dispatch} = this.props;
    console.log('requestUserMedia')
    let src = "";
    captureUserMedia((stream, options) => {
      src = window.URL.createObjectURL(stream);
      dispatch(streaming(src));
      console.log('setting state', src)
    });
  }



  render() {

    console.log("Webcam render");
    console.log(this.props);

    return (
      <div>
      <video
      ref='video'
      autoPlay
      src={this.props.streaming.src}
      style={{width: 320, height: 240}}
      />
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    streaming: state.src
  }
}
export default connect(mapStateToProps)(Webcam);
