/*
3 tpyes of button

default 

inverted 

google sign in

*/
import { BaseButton, GoogleSignInButton, InvertButton } from "./button.styles";

export const BUTTON_TYPES_CLASSES = {
  base: "base",
  google: "google-sign-in",
  invered: "inverted",
};

const getButton = (buttonType = BUTTON_TYPES_CLASSES.base) => {
  return {
    [BUTTON_TYPES_CLASSES.base]: BaseButton,
    [BUTTON_TYPES_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPES_CLASSES.invered]: InvertButton,
  }[buttonType];
};

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
