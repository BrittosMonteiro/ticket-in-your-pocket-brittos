import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CartView from "./views/Cart/index.jsx";
import App from "./App.jsx";
import HomeView from "./views/Home/index.jsx";
import ProductDetails from "./views/ProductDetails/index.jsx";
import { CartProvider } from "./context/CartContext.jsx";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6xVl8zA0pAVleUfTA79btV9HHusbCBpw",
  authDomain: "coderhouse-projeto-final-react.firebaseapp.com",
  projectId: "coderhouse-projeto-final-react",
  storageBucket: "coderhouse-projeto-final-react.appspot.com",
  messagingSenderId: "487332429098",
  appId: "1:487332429098:web:fedab55aa0cb96da97b253"
};

// Initialize Firebase
initializeApp(firebaseConfig);


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
