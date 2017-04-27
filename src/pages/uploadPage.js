import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { FormGroup, Form, Button, ControlLabel, FormControl } from 'react-bootstrap';
import Tooltip from 'react-tooltip-component';
import Header from '../components/header';

class uploadPage extends Component {

  render() {
    return (


      <div className="recordpage">
        <Header />
        <br/>
        <Grid>
          <Row>
            <br/>
            <hr/>
            <Row className="formrow">

              <Form horizontal>
                <FormGroup controlId="formHorizontalAuthor">
                  <Col componentClass={ControlLabel} sm={2}>
                  Author Name
                  </Col>
                  <Col sm={10}>
                  <FormControl type="Author Name" placeholder="Name" />
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalTitle">
                  <Col componentClass={ControlLabel} sm={2}>
                  Title
                  </Col>
                  <Col sm={10}>
                  <FormControl type="Title" placeholder="Title e.g. Addition & Subtraction" />
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalSubject">
                  <Col componentClass={ControlLabel} sm={2}>
                  Subject
                  </Col>
                  <Col sm={10}>
                  <FormControl type="Subject" placeholder="Subject e.g. Math" />
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalDescription">
                  <Col componentClass={ControlLabel} sm={2}>
                  Video Description
                  </Col>
                  <Col sm={10}>
                  <FormControl type="Description" placeholder="Description e.g. How to add and subtract with positive and negative numbers" />
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalDescription">
                  <Col componentClass={ControlLabel} sm={2}>
                  Choose A File
                  </Col>
                  <Col sm={10}>
                  <label htmlFor="FileBox"> </label><input type="file" id="FileBox" /><br />
                  </Col>
                </FormGroup>



                <FormGroup>
                  <Col smOffset={7} sm={8}>
                    <Tooltip title='Click here to save your video to the library' position='right'>
                    <Button className='btn btn-primary' id="UploadButton" ref='save' type="button">
                    Upload
                    </Button>
                    </Tooltip>
                  </Col>
                </FormGroup>
              </Form>

            </Row>
            <hr/>
            <br/>
          </Row>
        </Grid>
      </div>

    );
  }
}

export default uploadPage;
