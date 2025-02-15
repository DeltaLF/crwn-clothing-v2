import styled from "styled-components";
import {
  BaseButton,
  GoogleSignInButton,
  InvertButton,
} from "../button/button.styles";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 270px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${BaseButton}, ${GoogleSignInButton}, ${InvertButton}, {
    margin-top: auto;
  }
`;

export const EmptyMessage = styled.span`
  display: block;
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItems = styled.div`
  overflow-y: scroll;
`;

// .cart-dropdown-container {

//     .empty-message {

//     }

//     .cart-items{

//     }
//     // .cart-items {
//     //   height: 240px;
//     //   display: flex;
//     //   flex-direction: column;
//     //   overflow: scroll;
//     // }

//     button {
//       margin-top: auto;
//     }
//   }
