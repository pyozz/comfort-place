import React, { createContext, useContext, useState, useEffect } from "react";

import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";

export const ProductsContext = createContext({
  products: [],
});

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const productsCollectionRef = collection(db, "products");

  const getProducts = async () => {
    try {
      const response = await getDocs(productsCollectionRef);
      const data = response.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
}

export function useProductsContext() {
  return useContext(ProductsContext);
}
