import {
  ProductCartContainer,
  Name,
  Footer,
  Price,
} from "./product-card.styles";
import Button, { BUTTON_TYPES_CLASSES } from "../button/button.component";

import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/carts/cart.action";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/carts/cart.selector";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const addItemToCarthander = () => {
    dispatch(addItemToCart(cartItems, product));
  };

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPES_CLASSES.inverted}
        onClick={addItemToCarthander}
      >
        Add to card
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;
