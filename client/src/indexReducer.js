import { combineReducers } from "redux";
import auth from "./auth/authReducer";
import products from "./products/productReducer";

const rootReducer = combineReducers({
  auth,
  products
});

export default rootReducer;
