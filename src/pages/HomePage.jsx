import React, { useEffect, useState } from "react";
import { ProductSection } from "@/common/Product";

import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";

function HomePage() {
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

  return <ProductSection products={products} />;
}

export default HomePage;
