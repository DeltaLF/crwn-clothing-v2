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

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  useEffect(() => {
    setCartCount(
      cartItems.reduce((prev, curr) => {
        return curr.quantity + prev;
      }, 0)
    );
  }, [cartItems]);

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
