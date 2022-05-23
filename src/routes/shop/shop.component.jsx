import { useContext } from 'react';

import { ProductContext } from '../../contexts/shop_catalog.context';

import ProductCard from '../../components/product_card/product_card.component';

import './shop.styles.scss';

const Shop = () => {
  const { products } = useContext(ProductContext);

  return(
    <div className='products-container'>
      {products.map((product) => (
        <ProductCard key={product.id} productValues={product} />
      ))}
    </div>
  )
}

export default Shop;