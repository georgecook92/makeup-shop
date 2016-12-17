import { combineReducers } from "redux";
import auth from "./auth/authReducer";
import products from "./products/productReducer";
import cart from "./cart/cartReducer";

const rootReducer = combineReducers({
  auth,
  products,
  cartState: cart
});

export default rootReducer;
