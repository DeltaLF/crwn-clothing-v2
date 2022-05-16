import { createContext, useState, useEffect } from "react";

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
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  clearItemFromCart: () => {},
  total: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [total, setTotal] = useState(0);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const removeItemToCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };
  const clearItemFromCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
  };

  useEffect(() => {
    const total = cartItems.reduce((prev, curr) => {
      return curr.quantity * curr.price + prev;
    }, 0);

    setTotal(total);
  }, [cartItems]);

  useEffect(() => {
    const cartCount = cartItems.reduce((prev, curr) => {
      return curr.quantity + prev;
    }, 0);
    setCartCount(cartCount);
  }, [cartItems]);

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
