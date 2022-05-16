import {
  CheckoutItemContainer,
  ImageContainer,
  Name,
  Value,
  Price,
  Quantity,
  Arrow,
  RemoveButton,
} from "./check-item.styles";
import { useContext } from "react";
import { CartContext } from "../../../../contexts/cart.context";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity, id } = cartItem;
  const { clearItemFromCart, addItemToCart, removeItemToCart } =
    useContext(CartContext);

  const clearItemHandler = () => {
    clearItemFromCart(cartItem);
  };
  const addItemhandler = () => {
    addItemToCart(cartItem);
  };
  const removeItemHandler = () => {
    removeItemToCart(cartItem);
  };
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <Name>{name}</Name>

      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value> {quantity}</Value>
        <Arrow onClick={addItemhandler}>&#10095;</Arrow>
      </Quantity>
      <Price>{price}</Price>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
