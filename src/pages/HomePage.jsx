import React from "react";
import {
  ProductsContext,
  useProductsContext,
} from "../contexts/products_context";

import { ProductSection } from "@/common/Product";

function HomePage() {
  const { products } = useProductsContext(ProductsContext);

  return <ProductSection products={products} />;
}

export default HomePage;
