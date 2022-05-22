import { createSelector } from "reselect";
import { CartsState } from "./cart.reducer";
import { CartItem } from "./cart.type";
import { RootState } from "../store";
// export const selectCart = (state:any):CartsState => {
//   return state.cart;
// };

const selectCartReducer = (state:RootState):CartsState => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

export const selectCartCount = createSelector(
  [selectCartReducer],
  (cartItems) => {
    console.log("selectCartCount ", cartItems);
    return cartItems.cartItems.reduce((total:number, cartItem:CartItem):number => {
      return total + cartItem.quantity;
    }, 0);
  }
);

export const selectCartTotal = createSelector(
  [selectCartReducer],
  (cartItems) =>
    cartItems.cartItems.reduce((total:number, cartItem:CartItem):number => {
      return total + cartItem.quantity * cartItem.price;
    }, 0)
);
