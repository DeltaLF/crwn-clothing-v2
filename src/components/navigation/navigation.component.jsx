import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Crownlogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { CartContext } from "../../contexts/cart.context";

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from "./navigation.styles";

const Navigation = () => {
  const { isCartOpen } = useContext(CartContext);

  const { currentUser } = useContext(UserContext);
  const signOutHandler = async () => {
    // setCurrentUser(null); // let signOutUser handle
    const res = await signOutUser(); // firebase
  };
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <Crownlogo className="logo" />
        </LogoContainer>

        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutHandler}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <NavLink as={CartIcon} />
          {/* <CartIcon className="nva-link" /> */}
        </NavLinks>
        {isCartOpen ? <CartDropdown /> : null}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
