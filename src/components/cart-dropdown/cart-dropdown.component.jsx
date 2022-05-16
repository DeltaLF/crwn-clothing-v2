import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown-styles";
import Button from "../button/button.component";
import { useContext } from "react";
import CartItem from "../cart-item/cart-item.component";
import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
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
