import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles";
import { useSelector } from "react-redux";
import {
  selectIsCartOpen,
  selectCartCount,
} from "../../store/carts/cart.selector";
import { useDispatch } from "react-redux";
import { setIsCartOpen } from "../../store/carts/cart.action";

const CartIcon = () => {
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  const dispatch = useDispatch();
  const cartToggleHandler = () => {
    dispatch(setIsCartOpen(!isCartOpen));
  };
  return (
    <CartIconContainer onClick={cartToggleHandler}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
