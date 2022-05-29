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

import { CategoryItem } from "../../store/categories/category.types";
import { CartItem } from "../../store/carts/cart.type";
import {FC} from "react"

type productCardProps = {
  key:string;
  product: CartItem;
}
// product is CartItem
const ProductCard:FC<productCardProps> = ({ product }) => {
  const { name, price, imageUrl } = product;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const addItemToCarthandler = () => {
    console.log("addItemToCartHandler");
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
        onClick={addItemToCarthandler}
      >
        Add to card
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;
