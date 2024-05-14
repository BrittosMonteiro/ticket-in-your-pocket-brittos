import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomeView from "../views/HomeView";
import CartView from "../views/CartView";
import LoginForm from "../views/auth/LoginForm";
import SignupForm from "../views/auth/SignupForm";
import OrderHistoryView from "../views/OrderHistory";

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
        element: <OrderHistoryView />,
      },
    ],
  },
]);
