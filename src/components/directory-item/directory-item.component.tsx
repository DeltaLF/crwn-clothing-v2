import {
  DirectoryContainer,
  BackgorundImage,
  DirectoryItemBody,
} from "./directory-item.styles";
import { useNavigate } from "react-router-dom";
import { FC } from "react";

import { DirectoryItemType } from "./../directory/directory.component"


type DirectoryItemProps = {
  category: DirectoryItemType;
}

const DirectoryItem:FC<DirectoryItemProps> = (props) => {
  const { title, imageUrl } = props.category;
  const navigate = useNavigate()
  const onNavigateHandler = ()=>{
    navigate(`shop/${title}`)
  }
  return (
    //   <Link to={title}>
    //   <Title>{title.toUpperCase()}</Title>
    // </Link>

    <DirectoryContainer onClick={onNavigateHandler}>
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
