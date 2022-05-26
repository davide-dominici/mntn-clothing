import { useContext, Fragment } from 'react';

import { CatalogContext } from '../../contexts/shop_catalog.context';

import CatalogPreview from '../../components/catalog_preview/catalog_preview.component';


const CatalogCategories = () => {
  const { catalogMap } = useContext(CatalogContext);

  return(
    <Fragment>
      {
        Object.keys(catalogMap).map((title) => {
          const products = catalogMap[title];

          return <CatalogPreview key={title} title={title} products={products} />;

        })
      }
    </Fragment>
  )
}

export default CatalogCategories;