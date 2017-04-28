import React, { Component } from 'react';
import { Grid, Row, Col, Button, Thumbnail } from 'react-bootstrap';
import Header from '../components/header';
import './librarypage.css';
import axios from 'axios';



class Librarypage extends Component {

  searchbtn = (e) => {

    let data = {}
    data.searchbar = this.refs.searchbar.value;
    console.log('hi from search btn');
    console.log(data);

    axios.get('/search/' + data.searchbar)
    .then(function(response){
      console.log('it worked', response.data); // ex.: { user: 'Your User'}
      console.log('it worked', response.status); // ex.: 200
    })
    .catch(function (error) {
      console.log(error);
      console.log('error getting video', error.status);
    });
  }

  componentDidMount() {

    axios.get('/all')
    .then(function(response){
      console.log('it worked', response.status); // ex.: 200
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
      console.log('error getting video', error.status);
    });
  }


  // router.get('/:input', function(req, res, next) {
  //
  //   var input = req.params.input;
  //
  // 	Video.find({$text : { $search: input}}, function(err, video){
  // 		if(err){
  // 			res.json({error: err});
  // 		}
  //
  //   		res.json(video);
  // 	});
  // });

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
                <input ref="searchbar" type="text" className="searchbar" id="searchbar" placeholder="Search" />
                <button className="btn btn-info" id="sbtn" onClick={this.searchbtn}>
                <span className="glyphicon glyphicon-search" aria-hidden="true" />
                </button>
              </div>
            </Row>
            <Grid>
              <Row className="thumbnails">
              <Col xs={6} md={4}>
                <Thumbnail src="" alt="242x200">
                  <h3>Video</h3>
                  <p>Title</p>
                  <p>Author</p>
                  <p>Subject</p>
                  <p>Description</p>
                  <Button bsStyle="default" block onClick={this.play}>Play</Button>
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
