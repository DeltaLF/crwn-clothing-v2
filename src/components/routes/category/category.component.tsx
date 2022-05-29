import { CategoryContainer, CategoryTitle } from "./category.styles";
import { useParams } from "react-router-dom";
import { useState, useEffect, Fragment } from "react";
import ProductCard from "../../product-card/product-card.component";
import Spinner from "../../spinner/spinner.component";
import { useSelector } from "react-redux";
import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "../../../store/categories/category.selector";

import {CartItem} from "./../../../store/carts/cart.type"

type CategoryRoutePraams = {
  category:string
}

const Category = () => {
  const { category } = useParams<keyof CategoryRoutePraams>() as CategoryRoutePraams;
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);
  // bug 
  // in Category products are CategoryItem (no needs to have quantity)
  // but when the products are passed in Product
  const isLoading = useSelector(selectCategoriesIsLoading);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      {isLoading ? (
        <Spinner></Spinner>
      ) : (
        <CategoryContainer>
          {products &&
            products.map((product) => {
              return <ProductCard key={product.id.toString()} product={product as CartItem} />;
            })}
        </CategoryContainer>
      )}
    </Fragment>
  );
};

export default Category;
