import {
  ProductCartContainer,
  Name,
  Footer,
  Price,
} from "./product-card.styles";
import Button, { BUTTON_TYPES_CLASSES } from "../button/button.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addItemToCarthander = () => {
    addItemToCart(product);
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
