import React from 'react'
import {
  Route,
  Redirect,
} from 'react-router-dom'

import MainPage from '../views/MainPage/MainPage';
import LoginPage from '../views/LoginPage/LoginPage';
import ArticleDetail from '../views/ArticleDetail';

export default () => [
  // <Route path="/" render={() => <Redirect to="/list" />} exact key="first" />,
  <Route path="/" component={MainPage} exact/>,
  <Route path="/detail/:id" component={ArticleDetail}/>,
  <Route path="/login" component={LoginPage} />
]
