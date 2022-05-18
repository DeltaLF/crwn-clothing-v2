import { createAction } from "../../utils/reducer/reducer.tuils";
import { CART_ACTION_TYPES } from "./cart.type";

export const setIsCartOpen = () => {
  return createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN);
  // { type: CART_ACTION_TYPES.SET_IS_CART_OPEN });
};

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
export const removeItemToCart = (cartItems, cartItemToRemove) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
export const clearItemFromCart = (cartItems, cartItemToClear) => {
  const newCartItems = clearCartItem(cartItems, cartItemToClear);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

// const updateCountTotal = (newCartItems) => {
//   let newCartCount = 0;
//   const newCartTotal = newCartItems.reduce((prev, curr) => {
//     newCartCount = newCartCount + curr.quantity;
//     return curr.quantity * curr.price + prev;
//   }, 0);

//   return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
//     cartItems: newCartItems,
//     total: newCartTotal,
//     cartCount: newCartCount,
//   });
// };

const addCartItem = (cartItems, productToAdd) => {
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

const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }
  return cartItems.map((cartItem) => {
    return cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem;
  });
};

const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter((cartItems) => {
    return cartItems.id !== cartItemToClear.id;
  });
};
