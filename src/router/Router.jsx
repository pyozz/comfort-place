import React from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "../common/Layout";
import HomePage from "../pages/HomePage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default Router;
