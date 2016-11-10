 import {AUTH_USER, AUTH_ADMIN, AUTH_ERROR, UI_MESSAGE} from '../actions/types';

export default function(state = {},action) {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, error: '', authenticated: true };
    case AUTH_ADMIN:
      return { ...state, error: '', authenticated: true, admin: true };
    case AUTH_ERROR:
      return { ...state, error: action.payload }; 
    case UI_MESSAGE:
      return { ...state, message: action.payload };
    default:
      return state;
  }
}
