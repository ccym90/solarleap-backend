import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
// import { FormGroup, ControlLabel } from 'react-bootstrap';
// import Tooltip from 'react-tooltip-component';
import Header from '../components/header';
import './uploadPage.css';
import axios from 'axios';



class uploadPage extends Component {

  handleSubmit = (e) => {
    e.preventDefault();

    let metaData = {}
      metaData.author = this.refs.authorInput.value;
      metaData.title = this.refs.titleInput.value;
      metaData.description = this.refs.descriptionInput.value;
      metaData.topics = this.refs.topicsInput.value;

    console.log(metaData)

    let video = this.refs.video.value;
    console.log(video)

    let file = new FormData()
    // let form = document.forms.namedItem("videoInfo");
    // console.log('from upload page this is form', form)

      // file.append('file', document);
      file.append('fileInfo', metaData )
      file.append('file', video )

      console.log(document)

      // { title : metaData.title, author: metaData.author, description: metaData.description, topics: metaData.topics  }

    axios.post('/upload', file)
      .then(function (response) {
        console.log(response.data);
        console.log(video)
      })
      .catch(function (error) {
        console.log(error);
      });



  }
// onSubmit={this.handleSubmit}
//
// <form action="http:localhost:5000/upload" method="POST" encType="multipart/form-data" className="form-horizontal">
//   <div className="form-group">
//     <label htmlFor="inputTitle" className="col-sm-2 control-label">Title</label>
//     <div className="col-sm-10">
//       <input ref="titleInput" type="text" className="form-control" id="title" placeholder="e.g. Addition & Subtraction" />
//     </div>
//   </div>



  render() {
    return (

      <div className="Container">
      <div className="uploadpage">
        <Header />
          <br/>
          <Grid>
              <Row className="formrow">
                <h1>Upload Page</h1>
                <hr/>
                <p>Here you can upload a video from your mobile, or computer and save to the video library.
                <strong> Before saving, please ensure you fill out the form below.</strong> </p>
                <p>Information to see how to use the uploader <a href="http://w3c.github.io/mediacapture-record/MediaRecorder.html" title="W3C MediaStream Recording API Editor's Draft">Editor's&nbsp;Draft</a>.</p>


                <form encType="multipart/form-data" method="POST" name="videoInfo" onSubmit={this.handleSubmit} className="form-horizontal">
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
                    <input ref="topicsInput" type="text" className="form-control" id="Subject" placeholder="e.g. Math" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="inputTopics" className="col-sm-2 control-label">Video Description</label>
                  <div className="col-sm-10">
                    <input ref="descriptionInput"  type="text" className="form-control" id="description" placeholder="e.g. How to add and subtract with positive and negative numbers" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="inputTopics" className="col-sm-2 control-label">
                    Choose A File</label>
                  <div className="col-sm-10">
                      <label htmlFor="FileBox"> </label><input ref='video' name='videoFile' type="file" id="FileBox" /><br />
                  </div>
                </div>
                  <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                      <button type="submit" className="btn btn-primary">Upload</button>
                    </div>
                  </div>
                </form>

              </Row>
              <hr/>
              <br/>
          </Grid>
      </div>
      </div>

    )
  }
}

export default uploadPage;
