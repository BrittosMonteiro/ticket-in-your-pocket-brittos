import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeView from "./views/Home";
import HeaderComponent from "./components/Header";
import CartView from "./views/Cart";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <HomeView />,
    },
    {
      path: "/cart",
      element: <CartView />,
    },
  ]);

  return (
    <main className="App">
      <HeaderComponent />
      <RouterProvider router={routes}></RouterProvider>
    </main>
  );
}

export default App;
