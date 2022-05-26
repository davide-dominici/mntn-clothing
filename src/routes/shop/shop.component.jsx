import { Routes, Route } from 'react-router-dom';

import CatalogCategories from '../catalog_categories/catalog_categories.component';
import Category from '../category/category.component';

const Shop = () => {
  return(
    <Routes>
      <Route index element={<CatalogCategories />}/>
      <Route path=':category' element={<Category />}/>
    </Routes>
  )
}

export default Shop;