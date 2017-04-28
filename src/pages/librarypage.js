import React, { Component } from 'react';
import { Grid, Row, Col, Button, Thumbnail } from 'react-bootstrap';
import Header from '../components/header';
import './librarypage.css';


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
          <p> Type in the search bar to find a video from the library. Search by topic, author, or any keyword.</p>
            <Row className="search">
              <div className="col-sm-10">
                <span>
                <input ref="titleInput" type="text" className="form-control" id="title" placeholder="Search" />
                <span> <button classname="searchbtn" onClick={this.handleClick}/> <span className="glyphicon glyphicon-search" aria-hidden="true" /></span>
                </span>
              </div>
            </Row>
          <Grid>
            <Row className="thumbnails">
            <Col xs={6} md={4}>
              <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
                <h3>Video</h3>
                <p>Title</p>
                <p>Author</p>
                <p>Subject</p>
                <p>Description</p>
                <Button bsStyle="default" block>Play</Button>
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
