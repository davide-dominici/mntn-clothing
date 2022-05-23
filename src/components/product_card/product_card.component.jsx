import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component';

import './product_card.styles.scss';



const ProductCard = ({ productValues }) => {
  const { name, price, imageUrl } = productValues;
  const { addItemToCart } = useContext(CartContext);

  const addSelectedProductToCart = () => addItemToCart(productValues);

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name} image`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}€</span>
      </div>
      <Button btnClass='inverted' btnText='Add to cart' btnProps={{onClick: addSelectedProductToCart}}></Button>
    </div>
  )
}


export default ProductCard;