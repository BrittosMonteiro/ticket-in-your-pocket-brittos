import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CartView from "./views/Cart/index.jsx";
import App from "./App.jsx";
import HomeView from "./views/Home/index.jsx";
import ProductDetails from "./views/ProductDetails/index.jsx";

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
        element: <ProductDetails />
      },
      {
        path: "cart",
        element: <CartView />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
