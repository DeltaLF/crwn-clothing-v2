import styled from "styled-components";

export const CategoryPreviewStyles = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;
export const Title = styled.span`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
`;
export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;

  @media screen and (max-width: 800px){
    grid-template-columns: repeat(2, 1fr);
    column-gap: 20px;
    row-gap:20px;
}

`;

// .category-preview-container {
//     display: flex;
//     flex-direction: column;
//     margin-bottom: 30px;

//     .title {
//       font-size: 28px;
//       margin-bottom: 25px;
//       cursor: pointer;
//     }

//     .preview {
//       display: grid;
//       grid-template-columns: repeat(4, 1fr);
//       column-gap: 20px;
//     }
//   }
