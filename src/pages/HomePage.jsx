import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterActions } from "@/store/slices/filterSlice.js";

import {
  ProductsContext,
  useProductsContext,
} from "../contexts/products_context";

import { ProductSection } from "@/common/Product";
import Filter from "../components/Filter";

function HomePage() {
  const { products } = useProductsContext(ProductsContext);
  const { filtered_products } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const [displayedProducts, setDisplayedProducts] = useState([]);

  useEffect(() => {
    dispatch(filterActions.setAllProductsFromContext(products));
  }, [dispatch, products]);

  useEffect(() => {
    if (
      JSON.stringify(filtered_products) !== JSON.stringify(displayedProducts)
    ) {
      setDisplayedProducts(filtered_products);
    }
  }, [filtered_products, displayedProducts]);

  return (
    <>
      <Filter />
      <ProductSection products={displayedProducts} />
    </>
  );
}

export default HomePage;
