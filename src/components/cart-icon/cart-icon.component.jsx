import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const cartToggleHandler = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <CartIconContainer onClick={cartToggleHandler}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
