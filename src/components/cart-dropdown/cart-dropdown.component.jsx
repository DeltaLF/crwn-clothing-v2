import "./cart-dropdown-styles.scss";
import Button from "../button/button.component";
import { useContext } from "react";
import CartItem from "../cart-item/cart-item.component";
import { CartContext } from "../../contexts/cart.context";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
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

        <Button>Go</Button>
      </div>
    </div>
  );
};

export default CartDropdown;
