import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomeView from "../views/Home";
import ProductDetails from "../views/ProductDetails";
import CartView from "../views/Cart";
import LoginForm from "../views/LoginForm";
import SignupForm from "../views/SignupForm";
import PurchaseHistoryView from "../views/PurchaseHistory";

export const routes = createBrowserRouter([
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
      {
        path: "history",
        element: <PurchaseHistoryView />,
      },
    ],
  },
]);
