import {Record, List} from "immutable";
import { handleActions } from 'redux-actions';
import {fetchingCart, fetchCartSuccess, fetchCartFail} from './cartActions';

// immutable
const CartState = Record({
  cart: List(),
  id: null,
  error: null,
  loading: false
  });

export default handleActions({

  [fetchingCart] : state => state.set('loading', true),

  [fetchCartSuccess] : (state, action) => {
    console.log('payload', action.payload);
    return state.set('loading', false).set('cart', action.payload.data)
                                            .set('id', action.payload.id)
  } ,

  [fetchCartFail] : (state, action) => state.set('loading', false).set('error', action.payload)

}, CartState());
