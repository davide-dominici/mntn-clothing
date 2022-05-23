import { createContext, useState, useEffect } from "react";
import catalog from '../shop_data.json';

export const ProductContext = createContext({

  products: [],
  setProduct: () => null

});

export const ProductProvider = ({ children }) => {

  const [ products, setProduct ] = useState(catalog);
  const value = { products };

  return <ProductContext.Provider value={value} >{children}</ProductContext.Provider>
}