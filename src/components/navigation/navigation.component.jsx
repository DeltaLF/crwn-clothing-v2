import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as Crownlogo } from "../../assets/crown.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { useSelector } from "react-redux";
import { selectIsCartOpen } from "../../store/carts/cart.selector";

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from "./navigation.styles";

import { selectCurrentUser } from "../../store/user/user.selector";

const Navigation = () => {
  const isCartOpen = useSelector(selectIsCartOpen);
  const signOutHandler = async () => {
    // setCurrentUser(null); // let signOutUser handle
    const res = await signOutUser(); // firebase
  };

  const currentUser = useSelector(selectCurrentUser);

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
