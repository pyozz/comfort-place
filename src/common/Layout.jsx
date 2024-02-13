import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "@/common/Navbar";

function Layout() {
  return (
    <main>
      <Navbar />
      <Outlet />
    </main>
  );
}

export default Layout;