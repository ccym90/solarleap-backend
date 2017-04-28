import React from 'react';
import { FormGroup, Form, Button, ControlLabel, FormControl, Col } from 'react-bootstrap';
import Tooltip from 'react-tooltip-component';
import { connect } from 'react-redux';
import { saving } from '../redux/actions';

class Userform extends React.Component {

  saveVideo = (e) => {
    console.log('click save');
    e.preventDefault();
    let {dispatch} = this.props;
    dispatch(saving());
  }

  render() {
    return (
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

        <FormGroup>
          <Col smOffset={7} sm={8}>
            <Tooltip title='Click here to save your video to the library' position='right'>
            <Button className='btn btn-primary' ref='save' type="submit" onClick={this.saveVideo}>
            Save
            </Button>
            </Tooltip>
          </Col>
        </FormGroup>
      </Form>

    )
  }
}
function mapStateToProps(state, props) {
  return {
    uploadSuccess: state
  }
}
export default connect(mapStateToProps)(Userform);
