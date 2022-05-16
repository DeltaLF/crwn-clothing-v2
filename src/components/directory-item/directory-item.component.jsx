import {
  DirectoryContainer,
  BackgorundImage,
  DirectoryItemBody,
} from "./directory-item.styles";

import { Link } from "react-router-dom";

const DirectoryItem = (props) => {
  const { title, imageUrl } = props.category;
  return (
    //   <Link to={title}>
    //   <Title>{title.toUpperCase()}</Title>
    // </Link>

    <DirectoryContainer as={Link} to={`shop/${title}`}>
      <BackgorundImage imageUrl={imageUrl} />
      {/* style={{ backgroundImage: `url(${imageUrl})` }} */}
      <DirectoryItemBody>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </DirectoryItemBody>
    </DirectoryContainer>
  );
};

export default DirectoryItem;
