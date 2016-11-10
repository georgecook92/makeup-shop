import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Home from './components/home.js';
import Panel from './components/admin/adminPanel.js';
import Admin from './components/admin/admin.js';
import AdminProducts from './components/admin/adminProducts.js';
import AdminOrders from './components/admin/adminOrders.js';
var store = require('./store/configureStore').configure();

import App from './components/app';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='admin' component={Admin} />
        <Route path='admin-panel' component={Panel}>
          <IndexRoute component={AdminProducts} />
          <Route path='products' component={AdminProducts} />
          <Route path='orders' component={AdminOrders} />
        </Route>

      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
