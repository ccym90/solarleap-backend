import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ReactDOM from 'react-dom';
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
