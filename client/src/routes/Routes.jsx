import React from 'react';
import App from '../App';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import OAuth2RedirectHandler from '../oauth2/OAuth2RedirectHandler';
import Home from '@/pages/Home';

export default function Routes() {
  return (
    <Router>
      <Switch>
        {/* <Route exact path='/' component={App} /> */}
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Signin} />
        <Route path='/register' component={Signup} />
        <Route path="/oauth2/redirect" component={OAuth2RedirectHandler} />
      </Switch>
    </Router>
  );
}