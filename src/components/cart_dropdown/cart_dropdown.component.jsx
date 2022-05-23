import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component';
import CartItem from '../cart_item/cart_item.component';

import './cart_dropdown.styles.scss';



const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  const checkoutNav = useNavigate();

  const goToCheckout = () => {
    checkoutNav('/checkout');
  }

  return(
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map(item => <CartItem key={item.id} cartProduct={item} />)}
      </div>
      <Button btnText={'Go to Chekout'} btnProps={{onClick: goToCheckout}}></Button>
    </div>
  )
}


export default CartDropdown;