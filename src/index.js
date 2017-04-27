import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import RecordPage from './pages/recordpage';
import Librarypage from './pages/librarypage';
import { Provider } from 'react-redux';

import {initStore} from './redux/store';
const store = initStore();

const NoMatch = ({ location }) => (
  <div>
  <h3>No match for <code>{location.pathname}</code></h3>
  </div>
)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Librarypage} />
        <Route exact path="/Record" component={RecordPage} />
        <Route component={NoMatch}/>
      </Switch>
    </Router>
  </Provider>
   ,document.getElementById('root')
);
