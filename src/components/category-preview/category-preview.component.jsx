import { Link } from "react-router-dom";
import {
  CategoryPreviewStyles,
  Title,
  Preview,
} from "./category-preview.stlye";
import ProductCard from "../product-card/product-card.component";

const CategoryPreview = ({ title, products }) => {
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
            return <ProductCard key={product.id} product={product} />;
          })}
      </Preview>
    </CategoryPreviewStyles>
  );
};

export default CategoryPreview;
