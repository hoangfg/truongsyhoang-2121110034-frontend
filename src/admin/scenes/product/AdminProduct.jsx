import React from "react";
import { Outlet } from "react-router-dom";
import AdminCategoryDetail from "../category/AdminCategoryDetail";
import AdminProductDetail from "./AdminProductDetail";

export default function AdminProduct() {
  return (
    <div>
      <Outlet />
      {/* <AdminProductDetail /> */}
    </div>
  );
}
