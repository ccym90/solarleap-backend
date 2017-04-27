import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Webcam from '../components/webcam';
import Playback from '../components/playbackvideo';
import Userform from '../components/form';
import Buttons from '../components/buttons';
import Header from '../components/header';
import './recordpage.css';


class Recordpage extends Component {
  render() {
    return (
      <div className="container">
      <div className="recordpage">
          <Header />
          <br/>
          <Grid>
            <Row className="videorow">
                <Col md={6} mdPull={6} />
                  <Webcam />
                  <br />

                <Col  md={6} mdPull={6}/>
                  <Playback />
            </Row>
            <hr/>
            <br/>
              <Row className='buttonrow'>
                  <Buttons />
              </Row>
            <br/>
            <hr/>
            <Row className="formrow">
              <Userform />
            </Row>
            <hr/>
            <br/>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Recordpage;
