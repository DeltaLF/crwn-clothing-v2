import "./cart-dropdown-styles.scss";
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
    return cartItems.map((cartItem) => {
      return (
        <div key={cartItem.id}>
          <CartItem cartItem={cartItem} />
        </div>
      );
    });
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {renderShopitmes()}

        <Button onClick={goToCheckoutHandler}>Go</Button>
      </div>
    </div>
  );
};

export default CartDropdown;
