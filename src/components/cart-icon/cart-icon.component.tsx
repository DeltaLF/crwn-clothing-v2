import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles";
import { useSelector } from "react-redux";
import {
  selectCartCount,
} from "../../store/carts/cart.selector";
import { useDispatch } from "react-redux";
import { setIsCartOpen } from "../../store/carts/cart.action";

const CartIcon = () => {
  const cartCount = useSelector(selectCartCount);

  const dispatch = useDispatch();
  const cartToggleHandler = () => {
    dispatch(setIsCartOpen());
  };
  return (
    <CartIconContainer onClick={cartToggleHandler}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
