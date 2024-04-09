import { Link } from "react-router-dom";
import "./style.css";
import { ShoppingCartSimple } from "phosphor-react";

export default function HeaderComponent() {
  return (
    <header className="header">
      <Link to={"/"}>
        <h1 className="title">TicketInYourPocket</h1>
      </Link>
      <Link to={"/cart"}>
        <ShoppingCartSimple color="#fff" size={28} />
      </Link>
    </header>
  );
}
