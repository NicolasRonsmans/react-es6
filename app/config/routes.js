'user strict';

import React from 'react/react';
import { Router, Route, IndexRoute } from 'react-router';
import Main from '../components/Main';
import Home from '../components/Home';
import Profile from '../components/Profile';

export default (
  <Route path="/" component={Main}>
    <IndexRoute component={Home} />
    <route path="profile/:username" component={Profile} />
  </Route>
);
