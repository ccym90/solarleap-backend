import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import RecordPage from './pages/recordpage';
import Librarypage from './pages/librarypage';

const NoMatch = ({ location }) => (
  <div>
  <h3>No match for <code>{location.pathname}</code></h3>
  </div>
)

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Librarypage} />
      <Route exact path="/Record" component={RecordPage} />
      <Route component={NoMatch}/>
    </Switch>
  </Router>
   ,document.getElementById('root')
);
