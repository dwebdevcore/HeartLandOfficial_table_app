import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';
import FooBar from './FooBar';
import Offices from './Offices';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();
const App = () => (
  <Router basename={`${process.env.PUBLIC_URL}`} history={history}>
    <Switch>
      <Route exact path={`${process.env.PUBLIC_URL}/`} component={Offices} />
      <Route
        exact
        path={`${process.env.PUBLIC_URL}/foobar`}
        component={FooBar}
      />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default App;
