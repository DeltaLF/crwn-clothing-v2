import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.tuils";

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

export const CartContext = createContext({
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  total: 0,
  setIsCartOpen: () => {},
  addItemToCart: () => {},
  clearItemFromCart: () => {},
  removeItemToCart: () => {},
});

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  total: 0,
};

export const CART_ACTION_TYPES = {
  SET_IS_CART_OPEN: "SET_CART_OPEN",
  SET_CART_ITEMS: "SET_CART_ITEMS",
};

const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return { ...state, isCartOpen: !state.isCartOpen };
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return { ...state, ...payload };
    default:
      throw new Error(`unexcpeted action type ${type}`);
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const { isCartOpen, cartItems, cartCount, total } = state;

  const setIsCartOpen = () => {
    dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN));
    // { type: CART_ACTION_TYPES.SET_IS_CART_OPEN });
  };

  const updateCountTotal = (newCartItems) => {
    let newCartCount = 0;
    const newCartTotal = newCartItems.reduce((prev, curr) => {
      newCartCount = newCartCount + curr.quantity;
      return curr.quantity * curr.price + prev;
    }, 0);

    dispatch(
      createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
        cartItems: newCartItems,
        total: newCartTotal,
        cartCount: newCartCount,
      })
    );
  };

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCountTotal(newCartItems);
  };
  const removeItemToCart = (cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    updateCountTotal(newCartItems);
  };
  const clearItemFromCart = (cartItemToClear) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    updateCountTotal(newCartItems);
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
    clearItemFromCart,
    removeItemToCart,
    total,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
