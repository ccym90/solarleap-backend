import React, { Component } from 'react';
import { Grid, Row, Col, Button, Thumbnail } from 'react-bootstrap';
import Header from '../components/header';

class Librarypage extends Component {
  render() {
    return (
      <div className="container">
      <div className="librarypage">
        <Header />
        <Grid>
        <Row className="videorow">
          <h1>Video Library</h1>
          <hr/>
          <p> Type in the search bar to find a video from the library. </p>
          <Grid>
            <Row className="tumbnails">
            <Col xs={6} md={4}>
              <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
                <h3>Thumbnail label</h3>
                <p>Description</p>
                <p>
                  <Button bsStyle="primary">Button</Button>&nbsp;
                  <Button bsStyle="default">Button</Button>
                </p>
              </Thumbnail>
            </Col>
            </Row>
          </Grid>
        </Row>
        </Grid>
      </div>
      </div>
    );
  }
}

export default Librarypage;
