import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { FormGroup, Form, Button, ControlLabel, FormControl } from 'react-bootstrap';
import Tooltip from 'react-tooltip-component';
import Header from '../components/header';
import './uploadPage.css';

class uploadPage extends Component {

  render() {
    return (

      <div className="Container">
      <div className="uploadpage">
        <Header />
        <br/>
        <Grid>
          <Row>
            <Row className="formrow">
            <h1>Upload Page</h1>
            <hr/>
            <p>Here you can upload a video from your mobile, or computer and save to the video library.
            <strong> Before saving, please ensure you fill out the form below.</strong> </p>
            <p>Information to see how to use the uploader <a href="http://w3c.github.io/mediacapture-record/MediaRecorder.html" title="W3C MediaStream Recording API Editor's Draft">Editor's&nbsp;Draft</a>.</p>


            <form onSubmit={this.handleSubmit} className="form-horizontal">
              <div className="form-group">
                <label htmlFor="inputTitle" className="col-sm-2 control-label">Title</label>
                <div className="col-sm-10">
                  <input ref="titleInput" type="text" className="form-control" id="title" placeholder="e.g. Addition & Subtraction" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="inputAuthor3" className="col-sm-2 control-label">Name</label>
                <div className="col-sm-10">
                  <input ref="authorInput" type="text" className="form-control" id="author" placeholder="e.g. Joe Bloggs" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="inputDescription" className="col-sm-2 control-label">Subject</label>
                <div className="col-sm-10">
                  <input ref="descriptionInput" type="text" className="form-control" id="Subject" placeholder="e.g. Math" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="inputTopics" className="col-sm-2 control-label">Video Description</label>
                <div className="col-sm-10">
                  <input ref="topicsInput" type="text" className="form-control" id="description" placeholder="e.g. How to add and subtract with positive and negative numbers" />
                </div>
              </div>

              <FormGroup controlId="formHorizontalDescription">
                <Col componentClass={ControlLabel} sm={2}>
                Choose A File
                <Col sm={10}>
                <label htmlFor="FileBox"> </label><input type="file" id="FileBox" /><br />
                </Col>
                </Col>
              </FormGroup>

              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <button type="submit" className="btn btn-primary">Save</button>
                </div>
              </div>
            </form>

            </Row>
            <hr/>
            <br/>
          </Row>
        </Grid>
      </div>
      </div>

    )
  }
}

export default uploadPage;
