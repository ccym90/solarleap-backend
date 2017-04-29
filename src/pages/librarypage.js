import React, { Component } from 'react';
import { Grid, Row, Col, Button, Thumbnail } from 'react-bootstrap';
import Header from '../components/header';
import './librarypage.css';
import axios from 'axios';



class Librarypage extends Component {



  constructor(props) {
    super(props);

    this.state = {

      library: []
      // img: '',
      // title: '',
      // author: '',
      // subject: '',
      // description: '',
      // playpath: ''
    }
  }

  searchbtn = (e) => {

    let data = {}
    data.searchbar = this.refs.searchbar.value;
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
    let _this = this;
    axios.get('/all')
    .then(function(response){
      let arr = response.data;
      console.log('arr', arr);
      _this.setState({
        library: arr
      });
      console.log('state', _this.state);
      console.log("response data", arr);
      console.log('library it worked', response.status); // ex: 200
    })
    .catch(function (error) {
      console.log(error);
      console.log('error getting library', error.status);
    });

  }

  componentWillUnmount() {
    this.unmounted = true;
  }

  render() {



      let renderLibrary = () => {
        return(
          <div>
          {this.state.library.map(function(library) {
            return(
              <Thumbnail src="{library.v}" alt="242x200" >
              <h4>Title:</h4>
              <h4>{library.title}</h4>
              <p>Author:{library.author}</p>
              <p>Subject:{library.topics}</p>
              <p>Description:{library.description}</p>
              </Thumbnail>
            );
          })}
          </div>
        )
      }
      // <Button bsStyle="default" block onClick={this.play}>Play</Button>

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
              <div>
              {renderLibrary()}
              </div>
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
