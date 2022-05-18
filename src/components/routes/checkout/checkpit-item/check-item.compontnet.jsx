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

import { useSelector } from "react-redux";
import { selectCartItems } from "../../../../store/carts/cart.selector";
import { useDispatch } from "react-redux";
import {
  clearItemFromCart,
  addItemToCart,
  removeItemToCart,
} from "../../../../store/carts/cart.action";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity, id } = cartItem;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const clearItemHandler = () => {
    dispatch(clearItemFromCart(cartItems, cartItem));
  };
  const addItemhandler = () => {
    dispatch(addItemToCart(cartItems, cartItem));
  };
  const removeItemHandler = () => {
    dispatch(removeItemToCart(cartItems, cartItem));
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
