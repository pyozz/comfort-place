import React from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "../common/Layout";
import HomePage from "../pages/HomePage";
import ProductDetailPage from "../pages/ProductDetailPage";
import CartPage from "../pages/CartPage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import WishlistPage from "../pages/WishlistPage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="products/:productId" element={<ProductDetailPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="wishlist" element={<WishlistPage />} />
      </Route>

      <Route path="login" element={<LoginPage />} />
      <Route path="signup" element={<SignupPage />} />
    </Routes>
  );
}

export default Router;
