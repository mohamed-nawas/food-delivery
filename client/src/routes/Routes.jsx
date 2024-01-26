import React from 'react';
import App from '../App';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/login' component={Signin} />
        <Route path='/register' component={Signup} />
      </Switch>
    </Router>
  );
}