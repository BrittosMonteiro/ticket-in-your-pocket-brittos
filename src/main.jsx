import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { CartProvider } from "./context/CartContext.jsx";

import { initializeApp } from "firebase/app";
import { routes } from "./router/Routes.jsx";
import { UserProvider } from "./context/UserContext.jsx";

const firebaseConfig = {
  apiKey: "AIzaSyD6xVl8zA0pAVleUfTA79btV9HHusbCBpw",
  authDomain: "coderhouse-projeto-final-react.firebaseapp.com",
  projectId: "coderhouse-projeto-final-react",
  storageBucket: "coderhouse-projeto-final-react.appspot.com",
  messagingSenderId: "487332429098",
  appId: "1:487332429098:web:fedab55aa0cb96da97b253",
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <CartProvider>
        <RouterProvider router={routes} />
      </CartProvider>
    </UserProvider>
  </React.StrictMode>
);
