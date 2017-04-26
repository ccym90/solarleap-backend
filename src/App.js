import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import Webcam from './components/webcam';
import Playback from './components/playbackvideo';
import Userform from './components/form';
import Buttons from './components/buttons';
import Header from './components/header';



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <Header />
        </div>
        <Grid>
          <Row xs={6} md={6} >
            <Row className="videorow">
                <Col xs={6} md={6} />
                  <Webcam />
                <Col xs={6} md={6} />
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
          </Row>
        </Grid>

      </div>
    );
  }
}

export default App;
