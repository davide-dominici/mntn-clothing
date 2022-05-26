import { Link } from 'react-router-dom';
import ProductCard from '../product_card/product_card.component';

import {
  CatalogContainerStyled,
  PreviewStyled,
  TitleStyled
} from './catalog_preview.styles';

const CatalogPreview = ({ title, products }) => (
  <CatalogContainerStyled>
    <h2>
      <TitleStyled to={title} >{title.toUpperCase()} &#8594;</TitleStyled>
    </h2>
    <PreviewStyled>
      {
        products.filter((_, index) => index < 4).map((product) => (
          <ProductCard key={product.id} productValues={product} />
        ))
      }
    </PreviewStyled>
  </CatalogContainerStyled>
);

export default CatalogPreview;