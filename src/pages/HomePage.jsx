import React, { useEffect } from "react";
import {
  ProductsContext,
  useProductsContext,
} from "../contexts/products_context";
import { filterActions } from "@/store/slices/filterSlice.js";

import { ProductSection } from "@/common/Product";
import { useDispatch } from "react-redux";

function HomePage() {
  const { products } = useProductsContext(ProductsContext);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterActions.setAllProductsFromContext(products));
  }, [dispatch, products]);

  return <ProductSection products={products} />;
}

export default HomePage;
