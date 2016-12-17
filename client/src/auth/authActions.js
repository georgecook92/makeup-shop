import { createAction } from 'redux-actions';
import {hashHistory} from 'react-router';
import axios from 'axios';
import {Map} from "immutable";

// const API_ROOT = "http://localhost:8080/api";

export const setLoadingTrue = createAction("Set auth loading true");
export const loginSuccess = createAction("Login success", (payload) => {
  hashHistory.push('/products/all');
  return payload;
});
export const loginFailure = createAction("Login failure");
export const initialise = createAction("Initialise");

export const getUserFromTokenSuccess = createAction("Get user from token success");
export const getUserFromTokenFail = createAction("Get user from token fail", (payload) => {
  hashHistory.push('/login');
  // potentially set error
  return payload;
});

export const getUserFromToken = (token) => {
  return function(dispatch) {
    dispatch(setLoadingTrue());
    const request = axios({
      method: 'get',
      url: '/api/auth/getUserFromToken',
      headers: {
        'Authorization': token
      }
    });
    request.then((response) => {
      dispatch(getUserFromTokenSuccess(response.data));
    }).catch((err) => {
      console.log('FAIL');
      dispatch(getUserFromTokenFail(err.response.data));
    });
  };
};

export const loginRequest = (data) => {
  return function(dispatch) {
    dispatch(setLoadingTrue());
    const request = axios.post(`/api/auth/login`, {email: data.email, password: data.password});
    request.then( (response) => {
      const {email, first_name, last_name, phone, token, user_id} = response.data;
      const payload = Map({
        email,
        firstName: first_name,
        lastName: last_name,
        phone,
        userId: user_id
      });

      localStorage.token = token;
      dispatch(loginSuccess(payload));

    } ).catch((err) => {
      dispatch(loginFailure(err.response.data));
    });
  };
};

export const registerRequest = (data) => {
  return function(dispatch) {
    dispatch(setLoadingTrue());
    const request = axios.post(`/api/auth/register`, {
      email: data.email,
      password: data.password,
      first_name: data.firstName,
      last_name: data.lastName,
      phone: data.phone
    });
    request.then( () => {
      const loginData = {
        email: data.email,
        password: data.password
      };
      dispatch(loginRequest(loginData));

    } ).catch((err) => {
      // dispatch(loginFailure(err.response.data));
      console.log("ERROR", err);
    });
  };
};
