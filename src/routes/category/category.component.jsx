import { useParams } from 'react-router-dom';
import { Fragment, useContext, useEffect, useState } from 'react';

import { CatalogContext } from '../../contexts/shop_catalog.context';

import ProductCard from '../../components/product_card/product_card.component';

import {
  CategoryContainerStyled,
  CategoryTitleStyled,
  SeparatorStyled
} from './category.styles';

const Category = () => {
  const { category } = useParams();
  const { catalogMap } = useContext(CatalogContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(catalogMap[category]);
  }, [category, catalogMap]);

  return (
    <Fragment>
      <CategoryTitleStyled>{category.toUpperCase()}</CategoryTitleStyled>
      <SeparatorStyled />
      <CategoryContainerStyled>
      {
        products && products.map((product) => <ProductCard key={[product.id]} productValues={product} />)
      }
    </CategoryContainerStyled>
    </Fragment>
  )
}

export default Category;