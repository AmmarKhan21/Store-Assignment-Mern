import { combineReducers } from "redux";
import cartProductsReducer from "./CartProducts";
import QuantityCounterReducer from "./ProductQuantityCounter";
import googleAuthReducer from "./GoogleAuth";

export default combineReducers({
  cartProducts: cartProductsReducer,
  quantityCounter: QuantityCounterReducer,
  googleAuth: googleAuthReducer
});
