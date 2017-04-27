import React from 'react';
// import { FormGroup, Form, Button, ControlLabel, FormControl, Col } from 'react-bootstrap';
// import Tooltip from 'react-tooltip-component';
import { connect } from 'react-redux';
import { saving } from '../redux/actions';
import axios from 'axios';

class Userform extends React.Component {

  saveVideo = (e) => {
    console.log('click save');
    e.preventDefault();
    let {dispatch} = this.props;
    dispatch(saving());
  }

  handleSubmit = (e) => {

    e.preventDefault();

    let data = {}
     data.author = this.refs.authorInput.value;
     data.title = this.refs.titleInput.value;
     data.description = this.refs.descriptionInput.value;
     data.topics = this.refs.topicsInput.value;

    console.log('from Userform', data);

    axios.post('/upload', {
      data
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  }




  render() {
    return (

      <form onSubmit={this.handleSubmit} className="form-horizontal">
              <div className="form-group">
                <label htmlFor="inputTitle" className="col-sm-2 control-label">Title</label>
                <div className="col-sm-10">
                  <input ref="titleInput" type="text" className="form-control" id="inputPassword3" placeholder="Title" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="inputAuthor3" className="col-sm-2 control-label">Author</label>
                <div className="col-sm-10">
                  <input ref="authorInput" type="text" className="form-control" id="author" placeholder="Author Name" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="inputDescription" className="col-sm-2 control-label">Description</label>
                <div className="col-sm-10">
                  <input ref="descriptionInput" type="text" className="form-control" id="inputDescription3" placeholder="Description" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="inputTopics" className="col-sm-2 control-label">Topics</label>
                <div className="col-sm-10">
                  <input ref="topicsInput" type="text" className="form-control" id="inputSubject3" placeholder="Topics" />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <button type="submit" className="btn btn-default">Save</button>
                </div>
              </div>
      </form>




    )
  }
}
function mapStateToProps(state, props) {
  return {
    uploadSuccess: state
  }
}
export default connect(mapStateToProps)(Userform);
