import React from 'react';
import Tooltip from 'react-tooltip-component';
import {ButtonToolbar, button, Col} from 'react-bootstrap';
// import { captureUserMedia } from '../App.js';
import RecordRTC from 'recordrtc';
//
// const hasGetUserMedia = !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
//                         navigator.mozGetUserMedia || navigator.msGetUserMedia);

class Buttons extends React.Component {

//   constructor(props) {
//     super(props);
//
//     this.startRecord = this.startRecord.bind(this);
//     this.stopRecord = this.stopRecord.bind(this);
//     this.download = this.download.bind(this);
//     this.startPreview = this.startPreview.bind(this);
//   }
//
//   startRecord() {
//   captureUserMedia((stream) => {
//     this.state.recordVideo = RecordRTC(stream, { type: 'video' });
//     this.state.recordVideo.startRecording();
//     this.setState({ recording: true});
//   });
// }

  // stopRecord() {
  //   this.state.recordVideo.stopRecording(() => {
  //     let params = {
  //       type: 'video/webm',
  //       blob: this.state.recordVideo,
  //       data: this.state.recordVideo.blob,
  //       id: Math.floor(Math.random()*90000) + 10000
  //     }
  //     let blob = this.state.recordVideo.blob;
  //     this.setState({ recorded: true, download: window.URL.createObjectURL(blob), recording: false});
  //     console.log('do we have a blob', this.state, blob);
  //   });
  // }
  //
  //
  // startPreview() {
  //   let buffer = this.state.recordVideo.blob;
  //   this.setState({preview: window.URL.createObjectURL(buffer)});
  //   console.log('the src', this.refs.playbackVideo);
  //   console.log('buffer', buffer);
  //   this.refs.playbackVideo.controls = true;
  // }
  //
  // download() {
  //   let recordedblob = this.state.recordVideo.blob;
  //   let url = window.URL.createObjectURL(recordedblob);
  //   console.log('URL', url);
  //   let a = document.createElement('a');
  //   console.log('Do we have and A', a);
  //   a.style.display = 'none';
  //   a.href = url;
  //   a.download = 'test.webm';
  //   document.body.appendChild(a);
  //   a.click();
  //   console.log('this is a', a);
  //   setTimeout(function() {
  //     document.body.removeChild(a);
  //     window.URL.revokeObjectURL(url);
  //   }, 100);
  // };

  render() {
    return (
      <div className="span10">
      <Col smOffset={5} sm={5}>

      <ButtonToolbar textCenter>
          <Tooltip title='Click here to begin recording video' position='left'>
            <button className='btn btn-success'ref='record' onClick={this.startRecord}>Start</button>
          </Tooltip>

          <Tooltip title='Click here to stop recording video' position='top'>
            <button className='btn btn-danger'ref='stop' onClick={this.stopRecord}>Stop</button>
          </Tooltip>

          <Tooltip title='Click here to download your video to your computer' position='bottom'>
            <button  className='btn btn-info'ref='download' onClick={this.download}>Download</button>
          </Tooltip>

          <Tooltip title='Click here to playback the video you just recorded' position='right'>
          <button  className='btn btn-warning' ref='preview' onClick={this.startPreview}>Preview</button>
          </Tooltip>
      </ButtonToolbar>
      </Col>
      </div>
    )
  }
}

export default Buttons;
