import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component';
import CartItem from '../cart_item/cart_item.component';

import {
  CartDropdownContainerStyled,
  CartItemsStyled
} from './cart_dropdown.styles';



const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  const checkoutNav = useNavigate();

  const goToCheckout = () => {
    checkoutNav('/checkout');
  }

  return(
    <CartDropdownContainerStyled>
      <CartItemsStyled>
        {
          //If there are no cart items show a message
          cartItems.length ? (
            cartItems.map(item => <CartItem key={item.id} cartProduct={item} />)
          ) : (
            <span>Empty</span>
          )
        }
      </CartItemsStyled>
      <Button btnText={'Go to Chekout'} btnProps={{onClick: goToCheckout}}></Button>
    </CartDropdownContainerStyled>
  )
}


export default CartDropdown;