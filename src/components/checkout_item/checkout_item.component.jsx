import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import {
  CheckoutItemsContainerStyled,
  ImageContainerStyled,
  CheckoutControlsStyled,
  ValuesStyled,
  AmountStyled,
  ArrowsStyled,
  RemoveButtonStyled
} from './checkout_item.styles';



const CheckoutItem = ({cartItem}) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { deleteItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext);

  const deleteItemHandler = () => deleteItemFromCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);

  return(
    <CheckoutItemsContainerStyled>
      <ImageContainerStyled>
        <img src={imageUrl} alt={`${name} in cart`}/>
      </ImageContainerStyled>
      <ValuesStyled>{name}</ValuesStyled>
      <CheckoutControlsStyled>
        <ArrowsStyled onClick={removeItemHandler}>&#10094;</ArrowsStyled>
        <AmountStyled>{quantity}</AmountStyled>
        <ArrowsStyled onClick={addItemHandler}>&#10095;</ArrowsStyled>
      </CheckoutControlsStyled>
      <ValuesStyled>{price}</ValuesStyled>
      <RemoveButtonStyled onClick={deleteItemHandler}>&#10005;</RemoveButtonStyled>
    </CheckoutItemsContainerStyled>
  )
}

export default CheckoutItem;