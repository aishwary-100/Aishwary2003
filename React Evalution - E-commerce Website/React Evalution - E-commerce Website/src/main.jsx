import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Products from "./Pages/Products.jsx";
import Home from "./Pages/Home.jsx";
import Cart from "./Pages/Cart.jsx";
import Checkout from "./Pages/Checkout.jsx";
import Login from "./Pages/Login.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./Components/Navbar.jsx";
import { ProductProvider } from "./Context/ProductContext.jsx";
import Register from "./Pages/Register.jsx";
import { UserProvider } from "./Context/UseAuth.jsx";
import PrivetRoute from "./utils/PrivetRoute.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: (
          <PrivetRoute>
            <Products />
          </PrivetRoute>
        ),
      },
      {
        path: "products",
        element: (
          <PrivetRoute>
            <Products />
          </PrivetRoute>
        ),
        children: [
          {
            path: "/products/:id",
            element: <Products></Products>,
          },
        ],
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      ,
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <ProductProvider>
      <ChakraProvider>
        <RouterProvider router={router}></RouterProvider>
      </ChakraProvider>
    </ProductProvider>
  </UserProvider>
);
