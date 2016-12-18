import { createAction } from 'redux-actions';
import {List} from 'immutable';
import axios from 'axios';

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
    } else {
      // check local storage for cart
    }

  };
};

export const addingToCart = createAction('Adding product to cart');
export const addToCartSuccess = createAction('Add product to cart success');
export const addToCartFail = createAction('Add product to cart fail');

export const addToCart = (data) => {
  return function(dispatch) {
      const token = localStorage.getItem('token');
      if (token) { // store in db
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
        })
        .catch((err) => {
          dispatch(addToCartFail(err));
        });
      } else {
        // localStorage
        let cart = localStorage.getItem('cart')
        if (cart) {
          let jsonCart = JSON.parse(cart);
          jsonCart.push()
        }
      }
  };
};
