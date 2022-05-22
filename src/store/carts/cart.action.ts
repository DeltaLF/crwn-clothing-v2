import { createAction,withMatcher, Action,ActionWithPayload } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES, CartItem } from "./cart.type";



const addCartItem = (cartItems:CartItem[], productToAdd:CartItem):CartItem[] => {
  let searchFlag = false;
  const nextCartItems = cartItems.map((cartItem) => {
    if (cartItem.id === productToAdd.id) {
      cartItem.quantity += 1;
      searchFlag = true;
    }
    return cartItem;
  });
  if (!searchFlag) {
    nextCartItems.push({ ...productToAdd, quantity: 1 });
  }
  return nextCartItems;
};

const removeCartItem = (cartItems:CartItem[], cartItemToRemove:CartItem):CartItem[] => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );
  if (existingCartItem && existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }
  return cartItems.map((cartItem) => {
    return cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem;
  });
};

const clearCartItem = (cartItems:CartItem[], cartItemToClear:CartItem):CartItem[] => {
  return cartItems.filter((cartItems) => {
    return cartItems.id !== cartItemToClear.id;
  });
};


export type SetIsCartOpen = Action<CART_ACTION_TYPES.SET_IS_CART_OPEN>
// export type AddItemToCart = ActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEMS,CartItem[]>
// export type RemoveItemtoCart = ActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEMS,CartItem[]>
// export type ClearItemFromCart = ActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEMS,CartItem[]>
export type SetCartItems =  ActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEMS,CartItem[]>


export const setIsCartOpen = withMatcher( ():SetIsCartOpen => {
  return createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN);
  // { type: CART_ACTION_TYPES.SET_IS_CART_OPEN });
});

export const setCartItems = withMatcher((cartItems:CartItem[]):SetCartItems=>createAction(CART_ACTION_TYPES.SET_CART_ITEMS,cartItems) )

export const addItemToCart = (cartItems:CartItem[] , productToAdd:CartItem):SetCartItems => {
  console.log("addItemToCart", cartItems)
  const newCartItems = addCartItem(cartItems, productToAdd);
  return setCartItems(newCartItems)
};
export const removeItemToCart = (cartItems:CartItem[] , cartItemToRemove:CartItem):SetCartItems => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);
  return  setCartItems(newCartItems)
};
export const clearItemFromCart = (cartItems:CartItem[], cartItemToClear:CartItem):SetCartItems => {
  const newCartItems = clearCartItem(cartItems, cartItemToClear);
  return  setCartItems(newCartItems)
};


