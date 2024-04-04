import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeView from "./views/Home";
import HeaderComponent from "./components/Header";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <HomeView />,
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
