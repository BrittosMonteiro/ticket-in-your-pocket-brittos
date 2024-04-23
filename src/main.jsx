import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CartView from "./views/Cart/index.jsx";
import App from "./App.jsx";
import HomeView from "./views/Home/index.jsx";
import ProductDetails from "./views/ProductDetails/index.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import LoginForm from "./components/LoginForm/index.jsx";
import SignupForm from "./components/SignupForm/index.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomeView />,
      },
      {
        path: "movie/:id",
        element: <ProductDetails />,
      },
      {
        path: "cart",
        element: <CartView />,
      },
      {
        path: "login",
        element: <LoginForm />,
      },
      {
        path: "signup",
        element: <SignupForm />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={routes} />
    </CartProvider>
  </React.StrictMode>
);
