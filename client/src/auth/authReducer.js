import {Record, Map} from "immutable";
import { handleActions } from 'redux-actions';
import {setLoadingTrue, loginSuccess,
        loginFailure, initialise, getUserFromTokenFail,
      getUserFromTokenSuccess} from './authActions';

// immutable
const AuthState = Record({
  user: Map(),
  error: null,
  loading: false
  });

export default handleActions({

  [initialise] : () => AuthState(),

  [setLoadingTrue] : (state) => state.set('loading', true),

  [loginSuccess] : (state, action) => state.set('user', action.payload).set('loading', false),

  [loginFailure] : (state, action) => state.set('error', action.payload).set('loading', false),

  [getUserFromTokenSuccess] : (state, action) => state.set('user', action.payload).set('loading', false),

  [getUserFromTokenFail] : (state, action) => state.set('error', action.payload).set('loading', false)

}, AuthState());
