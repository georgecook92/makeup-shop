import { createAction } from 'redux-actions';
import axios from 'axios';
import {Map} from "immutable";

// const API_ROOT = "http://localhost:8080/api";

export const setLoadingTrue = createAction("Set loading true");
export const setLoadingFalse = createAction("Set loading false");
export const loginSuccess = createAction("Login success");
export const loginFailure = createAction("Login failure");
export const initialise = createAction("Initialise");

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
