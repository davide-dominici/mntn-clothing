import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component';

import {
  ProductCardContainerStyled,
  FooterStyled
} from './product_card.styles';



const ProductCard = ({ productValues }) => {
  const { name, price, imageUrl } = productValues;
  const { addItemToCart } = useContext(CartContext);

  const addSelectedProductToCart = () => addItemToCart(productValues);

  return (
    <ProductCardContainerStyled>
      <img src={imageUrl} alt={`${name} image`} />
      <FooterStyled>
        <span className='name'>{name}</span>
        <span className='price'>{price}€</span>
      </FooterStyled>
      <Button btnClass='inverted' btnText='Add to cart' btnProps={{onClick: addSelectedProductToCart}}></Button>
    </ProductCardContainerStyled>
  )
}


export default ProductCard;