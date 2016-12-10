import React from 'react';
import ReactDOM from 'react-dom';

import RootComponent from "./RootComponent.js";
import Login from "./auth/LoginComponent.js";
import Register from "./auth/RegisterComponent.js";

import { Provider } from "react-redux";
import { Router, Route, hashHistory, IndexRoute } from "react-router";

import configureStore from "./store/configureStore";
const store = configureStore();

ReactDOM.render(
  <Provider store={store} >
    <Router history={hashHistory}>
        <Route path="/" component={RootComponent}>
          <IndexRoute component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
