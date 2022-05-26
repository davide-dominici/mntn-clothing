import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import {
  CartIconContainerStyled,
  ShoppingBagIconStyled,
  ItemCountStyled
} from './cart_icon.styles';

const CartIcon = () => {
  const { cartOpen, setCartOpen, cartCount } = useContext(CartContext);

  const toggleCart = () => setCartOpen(!cartOpen);

  return(
    <CartIconContainerStyled onClick={toggleCart}>
      <ShoppingBagIconStyled />
      <ItemCountStyled>{cartCount}</ItemCountStyled>
    </CartIconContainerStyled>
  )
}

export default CartIcon;