import React from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "../common/Layout";
import HomePage from "../pages/HomePage";
import ProductDetailPage from "../pages/ProductDetailPage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="products/:productId" element={<ProductDetailPage />} />
      </Route>
    </Routes>
  );
}

export default Router;
