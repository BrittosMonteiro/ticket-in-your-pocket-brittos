import "./App.css";
import HeaderComponent from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <main className="flex flex-col items-center">
      <HeaderComponent />
      <Outlet />
    </main>
  );
}

export default App;
