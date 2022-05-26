import {
  CartItemContainerStyled,
  ItemDetailsStyled
} from './cart_item.styles';

const CartItem = ({ cartProduct }) => {
  const { name, price, quantity, imageUrl } = cartProduct;

  return (
    <CartItemContainerStyled>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetailsStyled>
        <span>{name}</span>
        <span>{quantity} x {price}€</span>
      </ItemDetailsStyled>
    </CartItemContainerStyled>
  );
}

export default CartItem;