import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import CheckoutItem from '../../components/checkout_item/checkout_item.component';

import {
  CheckoutContainerStyled,
  CheckoutHeaderStyled,
  HeaderBlockStyled,
  TotalStyled
} from './checkout.styles';

const Checkout = () => {

  const { cartItems, cartTotal } = useContext(CartContext);

  return(
    <CheckoutContainerStyled>
      <CheckoutHeaderStyled>
        <HeaderBlockStyled>
          <span>Product</span>
        </HeaderBlockStyled>
        <HeaderBlockStyled>
          <span>Description</span>
        </HeaderBlockStyled>
        <HeaderBlockStyled>
          <span>Quantity</span>
        </HeaderBlockStyled>
        <HeaderBlockStyled>
          <span>Price</span>
        </HeaderBlockStyled>
        <HeaderBlockStyled>
          <span>Remove</span>
        </HeaderBlockStyled>
      </CheckoutHeaderStyled>
      {
        cartItems.map((item) => {
          return <CheckoutItem key={item.id} cartItem={item} />
        })
      }
      <TotalStyled>Total: {cartTotal}€</TotalStyled>
    </CheckoutContainerStyled>
  )
}

export default Checkout;