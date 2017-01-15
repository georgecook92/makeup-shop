import React from 'react';
import ReactDOM from 'react-dom';

import RootComponent from "./RootComponent";
import Login from "./auth/LoginComponent";
import Register from "./auth/RegisterComponent";
import SplashComponent from "./SplashComponent";
import IndividualProduct from "./products/IndividualProduct";
import CartView from './cart/CartView';

import { Provider } from "react-redux";
import { Router, Route, hashHistory, IndexRoute } from "react-router";

import configureStore from "./store/configureStore";
const store = configureStore();


import {getUserFromToken} from "./auth/authActions.js";
if (localStorage.getItem('token')) {
  store.dispatch(getUserFromToken(localStorage.getItem('token')));
}

ReactDOM.render(
  <Provider store={store} >
    <Router history={hashHistory}>
      <Route path="login" component={Login} ></Route>
      <Route path="register" component={Register} ></Route>
      <Route path="/" component={RootComponent}>
        <IndexRoute component={SplashComponent} ></IndexRoute>
        <Route path="products/">
          <Route path="all" component={SplashComponent}></Route>
          <Route path=":productId" component={IndividualProduct}></Route>
        </Route>
        <Route path="cart" component={CartView} />

      </Route>

    </Router>
  </Provider>,
  document.getElementById('root')
);
