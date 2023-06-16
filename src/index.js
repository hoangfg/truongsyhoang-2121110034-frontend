import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './scences/home/Home';
import ProductList from './scences/productList/ProductList';
import ProductDetail from './scences/productDetail/ProductDetail';
import Checkout from './scences/checkout/Checkout';
import Confirmation from './scences/checkout/Confirmation';
import CartMenu from './scences/global/CartMenu';
import Admin from './admin/Admin';
import PostList from './scences/postList/PostList';
import PostDetail from './scences/postDetail/PostDetail';
import Contact from './scences/contact/Contact';

import Dashboard from './admin/scenes/Dashboard';
import AdminProduct from './admin/scenes/product/AdminProduct';
import AdminProductBox from './admin/scenes/product/AdminProductBox';
import AdminProductDetail from './admin/scenes/product/AdminProductDetail';
import AdminProductAdd from './admin/scenes/product/AdminProductAdd';
import AdminProductEdit from './admin/scenes/product/AdminProductEdit';
import AdminCategoryEdit from './admin/scenes/category/AdminCategoryEdit';
import AdminCategoryDetail from './admin/scenes/category/AdminCategoryDetail';
import AdminCategoryBox from './admin/scenes/category/AdminCategoryBox';
import AdminCategoryAdd from './admin/scenes/category/AdminCategoryAdd';
import AdminCategory from './admin/scenes/category/AdminCategory';
import AdminBrand from './admin/scenes/brand/AdminBrand';
import AdminBrandBox from './admin/scenes/brand/AdminBrandBox';
import AdminBrandDetail from './admin/scenes/brand/AdminBrandDetail';
import AdminBrandEdit from './admin/scenes/brand/AdminBrandEdit';
import AdminBrandAdd from './admin/scenes/brand/AdminBrandAdd';
import Register from './auth/Register';
import Login from './auth/Login';




const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'product',
        element: <ProductList />
      },
      {
        path: 'product/:id',
        element: <ProductDetail />
      },
      {
        path: 'product/page/:pageNum',
        element: <ProductList />
      },

      {
        path: 'checkout',
        element: <Checkout />
      },
      {
        path: 'checkout/success',
        element: <Confirmation />
      },
      {
        path: 'cart',
        element: <CartMenu />
      },
      {
        path: 'post',
        element: <PostList />
      },
      {
        path: 'post/:id',
        element: <PostDetail />
      },
      {
        path: 'post/page/:pageNum',
        element: <PostList />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      // {
      //   path: 'registation',
      //   element: <Registation />
      // },
    ]
  },
  {
    path: '/admin',
    element: <Admin />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: '/admin/product',
        element: <AdminProduct />,
        children: [
          {
            index: true,
            element: <AdminProductBox />
          },
          {
            path: '/admin/product/page/:pageNum',
            element: <AdminProductBox />,
          },
          {
            path: '/admin/product/:id',
            element: <AdminProductDetail />,
          },
          {
            path: '/admin/product/add',
            element: <AdminProductAdd />,
          },
          {
            path: '/admin/product/edit/:id',
            element: <AdminProductEdit />,
          },
        ]
      },
      {
        path: '/admin/brand',
        element: <AdminBrand />,
        children: [

          {
            index: true,
            element: <AdminBrandBox />
          },
          {
            path: '/admin/brand/page/:pageNum',
            element: <AdminBrandBox />,
          },
          {
            path: '/admin/brand/:id',
            element: <AdminBrandDetail />,
          },
          {
            path: '/admin/brand/add',
            element: <AdminBrandAdd />,
          },
          {
            path: '/admin/brand/edit/:id',
            element: <AdminBrandEdit />,
          },
        ]
      },
      {
        path: '/admin/category',
        element: <AdminCategory />,
        children: [
          {
            index: true,
            element: <AdminCategoryBox />
          },
          {
            path: '/admin/category/page/:pageNum',
            element: <AdminCategoryBox />,
          },
          {
            path: '/admin/category/:id',
            element: <AdminCategoryDetail />,
          },
          {
            path: '/admin/category/add',
            element: <AdminCategoryAdd />,
          },
          {
            path: '/admin/category/edit/:id',
            element: <AdminCategoryEdit />,
          },
        ]
      },
    ]
  }
])
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals