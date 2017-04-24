import React from 'react';
import { Route, Link, Redirect, withRouter, Switch } from 'react-router-dom';
import createReactClass from 'create-react-class'; //deprecated: supported module
import About from './about.jsx';
import Base from './components/Base.jsx';
import LoginPage from './containers/LoginPage.jsx';
import DashboardPage from './containers/DashboardPage.jsx';
import Auth from './modules/Auth.js';
import SignUpForm from './components/SignUpForm.jsx';
import Todo from './components/Todo.jsx';

const routes = [
  {
    path: '/',
    component: Base
  },
  {
    path: '/login',
    component: LoginPage
  },
  {
    path:'/signup',
    component: SignUpForm
  },
  {
    path: '/logout',
    render: withRouter(({ history }) => {
      return(
        Auth.logOut(),history.push('/')
      )
    })
  },
  {
    path: '/todo',
    component: Todo
  }
]

module.exports = routes