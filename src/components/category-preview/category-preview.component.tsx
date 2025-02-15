import { Link } from "react-router-dom";
import {
  CategoryPreviewStyles,
  Title,
  Preview,
} from "./category-preview.stlye";
import ProductCard from "../product-card/product-card.component";
import { CartItem } from "../../store/carts/cart.type";
import {FC} from "react"

type categoryPreviewProps = {
  key:string;
  title:string;
  products:CartItem[];
}


const CategoryPreview: FC<categoryPreviewProps> = ({ title, products }) => {
  return (
    <CategoryPreviewStyles>
      <h2>
        {" "}
        <Link to={title}>
          <Title>{title.toUpperCase()}</Title>
        </Link>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => {
            return <ProductCard key={product.id.toString()} product={product} />;
          })}
      </Preview>
    </CategoryPreviewStyles>
  );
};

export default CategoryPreview;
