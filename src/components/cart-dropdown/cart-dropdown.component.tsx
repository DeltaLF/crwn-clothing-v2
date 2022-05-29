import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown-styles";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/carts/cart.selector";


const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  const renderShopitmes = () => {
    return cartItems.length ? (
      cartItems.map((cartItem) => {
        return (
          <div key={cartItem.id}>
            <CartItem cartItem={cartItem} />
          </div>
        );
      })
    ) : (
      <EmptyMessage>Your cart is empty</EmptyMessage>
    );
  };
  return (
    <CartDropdownContainer>
      <CartItems>
        {renderShopitmes()}

        <Button onClick={goToCheckoutHandler}>Go</Button>
      </CartItems>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
