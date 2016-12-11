import { createAction } from 'redux-actions';
import axios from 'axios';
import {List} from "immutable";

export const initialise = createAction("Initialise");
export const setLoadingTrue = createAction("Set product loading true");

export const fetchAllSuccess = createAction('Fetch all products success');
export const fetchAllFail = createAction('Fetch all products fail');

export const fetchAllProducts = () => {
  return function(dispatch) {
    console.log("FETCH PRODS");
    dispatch(setLoadingTrue());
    const request = axios.get(`/api/products/getAll`);
    request.then((response) => {
      const data = List(response.data);
      dispatch(fetchAllSuccess(data));
    }).catch((e) => {
      dispatch(fetchAllFail(e));
    })
  };
};
