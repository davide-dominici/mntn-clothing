import { useContext } from 'react';

import { ReactComponent as ShoppingCartIcon } from '../../assets/shopping_bag.svg';

import { CartContext } from '../../contexts/cart.context';

import './cart_icon.styles.scss';

const CartIcon = () => {
  const { cartOpen, setCartOpen, cartCount } = useContext(CartContext);

  const toggleCart = () => setCartOpen(!cartOpen);

  return(
    <div className='cart-icon-container' onClick={toggleCart}>
      <ShoppingCartIcon className='shopping-icon' />
      <span className='item-count'>{cartCount}</span>
    </div>
  )
}

export default CartIcon;