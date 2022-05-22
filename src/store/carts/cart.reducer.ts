import { AnyAction } from "redux";
import { CartItem} from "./cart.type";
import {setIsCartOpen, setCartItems} from "./cart.action"

export type CartsState= {
  isCartOpen: boolean,
  cartItems: CartItem[]
}

const CART_INITIAL_STATE:CartsState = {
  isCartOpen: false,
  cartItems: [],
};

export const cartReducer = (state = CART_INITIAL_STATE, action :  AnyAction):CartsState => {
  if(setIsCartOpen.match(action)){
    return { ...state, isCartOpen: !state.isCartOpen };
  }
  if(setCartItems.match(action)){
    return { ...state, cartItems: action.payload };
  }



  return state

  // switch (type) {
  //   case CART_ACTION_TYPES.SET_IS_CART_OPEN:
  //     return { ...state, isCartOpen: !state.isCartOpen };
  //   case CART_ACTION_TYPES.SET_CART_ITEMS:
  //     return { ...state, cartItems: payload };
  //   default:
  //     return state;
  // }
};
