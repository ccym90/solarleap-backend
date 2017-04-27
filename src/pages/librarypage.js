import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import Header from '../components/header';

class Librarypage extends Component {
  render() {
    return (
      <div className="librarypage">
        <Header />
        <Grid>
        <p> hello from Our library page </p>
        </Grid>
      </div>
    );
  }
}

export default Librarypage;
