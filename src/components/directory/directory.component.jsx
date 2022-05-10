import "./directory.styles.scss";
import CategoryItem from "../category-item/category-item.component";

const Directory = (props) => {
  return (
    <div className="categories-container">
      {props.categories.map((category) => {
        return <CategoryItem category={category} key={category.id} />;
      })}
    </div>
  );
};

export default Directory;
