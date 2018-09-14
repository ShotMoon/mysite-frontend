import React from 'react'
import {
  Route,
  Redirect,
} from 'react-router-dom'

import MainPage from '../views/MainPage/MainPage';
import LoginPage from '../views/LoginPage/LoginPage';

export default () => [
  // <Route path="/" render={() => <Redirect to="/list" />} exact key="first" />,
  <Route path="/" component={MainPage} exact/>,
  <Route path="/login" component={LoginPage} />
]
