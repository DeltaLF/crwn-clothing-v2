import { createContext, useState, useEffect } from "react";

import SHOP_ITEMS from "../shopdata.json";

export const ProductContext = createContext({
  products: [],
  setProducts: () => null,
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const value = { products, setProducts };
  useEffect(() => {
    setProducts(SHOP_ITEMS);
  }, []);
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
