import * as redux from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
import reduxPromise from 'redux-promise';
import authReducer from '../reducers/authReducer';

//CREATES THE REDUX STORE

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    form: formReducer, 
    auth: authReducer
  });

  var store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk, reduxPromise),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;

};
