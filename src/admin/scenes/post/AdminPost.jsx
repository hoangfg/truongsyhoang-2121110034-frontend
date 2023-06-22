import React from "react";
import { Outlet } from "react-router-dom";
import AdminPostDetail from "./AdminPostDetail";

export default function AdminPost() {
  return (
    <div>
      <Outlet />
      {/* <AdminPostDetail /> */}
    </div>
  );
}
