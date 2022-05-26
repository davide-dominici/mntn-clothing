import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as ShopLogo } from '../../assets/mountain.svg';
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import CartIcon from '../../components/cart_icon/cart_icon.component';
import CartDropdown from '../../components/cart_dropdown/cart_dropdown.component';

import {
  NavigationContainerStyled,
  LogoContainerStyled,
  ShopLogoStyled,
  NavLinksContainerStyled,
  NavLinkStyled
} from './navigation.styles';

const Navigation = () => {

  const { currentUser } = useContext(UserContext);
  const { cartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainerStyled>
        <LogoContainerStyled to='/'>
          <ShopLogoStyled />
        </LogoContainerStyled>
        <NavLinksContainerStyled>
          <NavLinkStyled to='/shop'>SHOP</NavLinkStyled>
          {
            /*If current user exist in context show sign out else show auth link */
            currentUser ? (
              <NavLinkStyled as='span' onClick={signOutUser}>SIGN OUT</NavLinkStyled>
            ) : (
              <NavLinkStyled to='/auth'>SIGN IN</NavLinkStyled>
            )
          }
          <CartIcon />
        </NavLinksContainerStyled>
        {cartOpen && <CartDropdown />}
      </NavigationContainerStyled>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;