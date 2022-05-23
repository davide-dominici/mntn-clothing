import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as ShopLogo } from '../../assets/mountain.svg';
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import CartIcon from '../../components/cart_icon/cart_icon.component';
import CartDropdown from '../../components/cart_dropdown/cart_dropdown.component';

import './navigation.styles.scss';

const Navigation = () => {

  const { currentUser } = useContext(UserContext);
  const { cartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className='navbar'>
        <Link className='logo-container' to='/'>
          <ShopLogo className='logo' />
        </Link>
        <div className='nav-links'>
          <Link className='nav-link' to='/shop'>SHOP</Link>
          {
            /*If current user exist in context show sign out else show auth link */
            currentUser ? (
              <span className='nav-link' onClick={signOutUser}>SIGN OUT</span>
            ) : (
              <Link className='nav-link' to='/auth'>SIGN IN</Link>
            )
          }
          <CartIcon />
        </div>
        {cartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;