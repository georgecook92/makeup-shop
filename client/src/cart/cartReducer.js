import {Record, List} from "immutable";
import { handleActions } from 'redux-actions';
import {fetchingCart, fetchCartSuccess, fetchCartFail,
        addingToCart, addToCartSuccess, addToCartFail,
        deletingFromCart, deleteFromCartSuccess, deleteFromCartFail} from './cartActions';

// immutable
const CartState = Record({
  cart: List(),
  id: null,
  error: null,
  loading: false
  });

export default handleActions({

  [fetchingCart] : state => state.set('loading', true),

  [fetchCartSuccess] : (state, action) => state.set('loading', false).set('cart', action.payload.data)
                                            .set('id', action.payload.id !== null ? action.payload.id : null),

  [fetchCartFail] : (state, action) => state.set('loading', false).set('error', action.payload),

  [addingToCart] : (state) => state.set('loading', true),

  [addToCartSuccess] : (state, action) => state.set('loading', false).set('cart', action.payload),

  [addToCartFail] : (state, action) => state.set('loading', false).set('error', action.payload),

  [deletingFromCart]: state => state.set('loading', true),

  [deleteFromCartFail]: (state, action) => state
    .set('error', action.payload)
    .set('loading', false),

  [deleteFromCartSuccess] : (state, action) => {
    const newCart = state.cart.filter( (c) => (c.product_id !== action.payload) );
    return state.set('cart', newCart).set('loading', false);
  }

}, CartState());
