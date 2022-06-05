import { CartItemStyles, ItemDetails, ItemName } from "./cart-item.styles";
import { CartItem as CartItemType } from "../../store/carts/cart.type";
import { FC,memo } from "react"

type  CartItemProps = {
  cartItem: CartItemType
}

const CartItem:FC<CartItemProps> = memo(({ cartItem }) => {
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
})

export default CartItem;
