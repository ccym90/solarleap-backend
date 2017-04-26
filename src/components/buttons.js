import React from 'react';
import Tooltip from 'react-tooltip-component';
import {ButtonToolbar, button, Col} from 'react-bootstrap';

class Buttons extends React.Component {

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
