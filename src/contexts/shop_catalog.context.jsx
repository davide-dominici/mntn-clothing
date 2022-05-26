import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocumentsFromDb } from "../utils/firebase/firebase.utils.js";

export const CatalogContext = createContext({

  catalogMap: {}

});

export const CatalogProvider = ({ children }) => {

  const [ catalogMap, setCatalogMap ] = useState({});

  useEffect(() => {
    const getCatalogMap = async () => {
      const catalogMap = await getCategoriesAndDocumentsFromDb();
      setCatalogMap(catalogMap);
    }

    getCatalogMap();
  }, []);

  const value = { catalogMap };

  return <CatalogContext.Provider value={value} >{children}</CatalogContext.Provider>
}