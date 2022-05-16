import { CartItemStyles, ItemDetails, ItemName } from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemStyles>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <ItemName>{name}</ItemName>
        <span>{`quantity: ${quantity}x${price}`}</span>
      </ItemDetails>
    </CartItemStyles>
  );
};

export default CartItem;
