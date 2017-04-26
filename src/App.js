import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import Header from './components/header';
import Recordpage from './pages/recordpage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <Header />
        </div>
        <Recordpage />

      </div>
    );
  }
}

export default App;
