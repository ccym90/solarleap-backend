import React from 'react';
import Tooltip from 'react-tooltip-component';
import {ButtonToolbar, button, Col} from 'react-bootstrap';
import { beginRecording, finishingRecording, downloaded, onPreview } from '../redux/actions';
import { captureUserMedia } from '../App.js';
import RecordRTC from 'recordrtc';
import { connect } from 'react-redux';

class Buttons extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      src: null,
      preview: null,
      download: null,
      recordVideo: null,
      downloaded: false,
    };
  }

  startRecord = (e) => {
  captureUserMedia((stream) => {
    this.state.recordVideo = RecordRTC(stream, { type: 'video' });
    this.state.recordVideo.startRecording();
    let {dispatch} = this.props;
    dispatch(beginRecording());
    console.log('from start the current props', this.state.recordVideo)
    });
  }

  stopRecord = (e) => {
      this.state.recordVideo.stopRecording();
      let {dispatch} = this.props;
      dispatch(finishingRecording());
  }


  startPreview = (e) => {
    let buffer = this.state.recordVideo.blob;
    let url = window.URL.createObjectURL(buffer)
    console.log('blob url',url);
    let {dispatch} = this.props;
    dispatch(onPreview(url))
  }

  download = (e) => {
    let recordedblob = this.state.recordVideo.blob;
    let url = window.URL.createObjectURL(recordedblob);
    console.log('URL', url);
    let a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'test.webm';
    document.body.appendChild(a);
    a.click();
    setTimeout(function() {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, 100);
    let {dispatch} = this.props;
    dispatch(downloaded());
  };

  render() {
    return (
      <div className="span10">
      <Col smOffset={5} sm={5}>

      <ButtonToolbar block>
          <Tooltip title='Click here to begin recording video' position='left'>
            <button className='btn btn-success'ref='record' onClick={this.startRecord}>Start</button>
          </Tooltip>

          <Tooltip title='Click here to stop recording video' position='top'>
          <button className='btn btn-danger'ref='stop' onClick={this.stopRecord}>Stop</button>
          </Tooltip>

          <Tooltip title='Click here to playback the video you just recorded' position='bottom'>
          <button  className='btn btn-warning' ref='preview' onClick={this.startPreview}>Preview</button>
          </Tooltip>

          <Tooltip title='Click here to download your video to your computer' position='right'>
          <button  className='btn btn-info'ref='download' onClick={this.download}>Download</button>
          </Tooltip>

      </ButtonToolbar>
      </Col>
      </div>
    )
  }
}

export default connect()(Buttons);
