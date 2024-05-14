import "./App.css";
import { Outlet } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";

function App() {
  return (
    <main className="flex flex-col items-center">
      <HeaderComponent />
      <Outlet />
    </main>
  );
}

export default App;
