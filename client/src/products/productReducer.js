import {Record, List} from "immutable";
import { handleActions } from 'redux-actions';
import {initialiseProducts, setLoadingTrue, fetchAllSuccess, fetchAllFail} from './productActions';

// immutable
const ProductState = Record({
  products: List(),
  error: null,
  loading: false
  });

export default handleActions({

  [initialiseProducts] : () => ProductState(),

  [setLoadingTrue] : (state) => state.set('loading', true),

  [fetchAllSuccess] : (state, action) => state.set('products', action.payload).set('loading', false),

  [fetchAllFail] : (state, action) => state.set('error', action.payload).set('loading', false)

}, ProductState());
