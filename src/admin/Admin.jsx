import React from "react";
import TopNav from "./components/TopNav";
import Menu from "./components/Menu";
import { Outlet } from "react-router-dom";

export default function Admin() {
  var ss = document.createElement("link");
  ss.rel = "stylesheet";
  ss.type = "text/css";
  ss.href = "/admin/dist/css/adminlte.min.css";
  document.head.appendChild(ss);

  return (
    <div>
      {/* Site wrapper */}
      <div className="wrapper">
        {/* Navbar */}
        <TopNav />
        {/* /.navbar */}
        {/* Main Sidebar Container */}
        <Menu />
        {/* Content Wrapper. Contains page content */}
        <div className="content-wrapper">
          {/* Content Header (Page header) */}
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>Fixed Layout</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="#st">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#st">Layout</a>
                    </li>
                    <li className="breadcrumb-item active">Fixed Layout</li>
                  </ol>
                </div>
              </div>
            </div>
            {/* /.container-fluid */}
          </section>
          {/* Main content */}
          <section className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  {/* Default box */}
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">Title</h3>

                    </div>
                    <div className="card-body">
                      <Outlet />
                    </div>
                    {/* /.card-body */}
                    <div className="card-footer">Footer</div>
                    {/* /.card-footer*/}
                  </div>
                  {/* /.card */}
                </div>
              </div>
            </div>
          </section>
          {/* /.content */}
        </div>
        {/* /.content-wrapper */}
        <footer className="main-footer">
          <div className="float-right d-none d-sm-block">
            <b>Version</b> 3.2.0
          </div>
          <strong>
            Copyright © 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.
          </strong>{" "}
          All rights reserved.
        </footer>
        {/* Control Sidebar */}
        <aside className="control-sidebar control-sidebar-dark">
          {/* Control sidebar content goes here */}
        </aside>
        {/* /.control-sidebar */}
      </div>
      
    </div>
  )
}
