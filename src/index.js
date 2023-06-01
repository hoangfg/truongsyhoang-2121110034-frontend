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
        path: 'product',
        element: <ProductList />
      },
      {
        path: 'product/page/:pageNum',
        element: <ProductList />
      },
      {
        path: 'product/:id',
        element: <ProductDetail />
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
    ]
  },
  {
    path: '/admin',
    element: <Admin />,

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