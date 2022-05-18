import { combineReducers } from "redux";
import { useReducer } from "react";
import { userReducer } from "./user/user.reduer";

import { categoriesReducer } from "./categories/category.reducer";
import { cartReducer } from "./carts/cart.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});
