import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import usersReducer from "./usersReducer";
import shoppingCartReducer from "./shoppingCartReducer";

export default combineReducers({
  // your reducers will go here
  products: productsReducer,
  users: usersReducer,
  shoppingCart: shoppingCartReducer,
});
