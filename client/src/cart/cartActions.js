import { createAction } from 'redux-actions';
import { List } from 'immutable';
import axios from 'axios';
import { hashHistory } from 'react-router';

export const fetchingCart = createAction('Fetching cart');
export const fetchCartSuccess = createAction('Fetch cart success');
export const fetchCartFail = createAction('Fetch cart fail');

export const fetchCart = () => {
  return function(dispatch) {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(fetchingCart());
      const request = axios({
        method: 'get',
        url: '/api/cart/getCart',
        headers: {
          'Authorization': token
        }
      });
      request.then((response) => {
        dispatch(fetchCartSuccess( { data: List(response.data.data), id: response.data.cartId } ));
      }).catch((err) => {
        dispatch(fetchCartFail(err));
      });
    }

  };
};

export const addingToCart = createAction('Adding product to cart');
export const addToCartSuccess = createAction('Add product to cart success');
export const addToCartFail = createAction('Add product to cart fail');

export const addToCart = (data) => {
  return function(dispatch) {
      const token = localStorage.getItem('token');
      dispatch(addingToCart());
      const request = axios({
        method: 'post',
        url: '/api/cart/addToCart',
        headers: {
          'Authorization': token
        },
        data: {
          product_id: data.productId,
          cart_id: data.cartId,
          quantity: data.quantity
        }
      });
      request.then((response) => {
        dispatch(addToCartSuccess(List(response.data.data)));
        hashHistory.push('/cart');
      })
      .catch((err) => {
        dispatch(addToCartFail(err.response.data));
      });
  };
};

export const deletingFromCart = createAction('Deleting from cart');
export const deleteFromCartSuccess = createAction('Deleting from cart success');
export const deleteFromCartFail = createAction('Deleting from cart fail');

export const deleteFromCart = (cartId, productId) => {
    return function(dispatch) {
        dispatch(deletingFromCart());
        const token = localStorage.getItem('token');
        const request = axios({
          method: 'delete',
          url: '/api/cart/deleteFromCart',
          headers: {
            'Authorization': token
          },
          data: {
            product_id: productId,
            cart_id: cartId
          }
        });
        request.then(() => {
          dispatch(deleteFromCartSuccess(productId));
        })
        .catch((err) => {
          dispatch(deleteFromCartFail(err.response.data));
        });
    };
};
