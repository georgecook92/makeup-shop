import React from 'react';
import ReactDOM from 'react-dom';

import Login from "./auth/LoginComponent.js";

import { Provider } from "react-redux";
import { Router, Route, hashHistory, IndexRoute } from "react-router";

import configureStore from "./store/configureStore";
const store = configureStore();

ReactDOM.render(
  <Provider store={store} >
    <Router history={hashHistory}>
        <Route path="/">
          <IndexRoute component={Login} />
        </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
