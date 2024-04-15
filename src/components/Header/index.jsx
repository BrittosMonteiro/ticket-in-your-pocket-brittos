import { Link } from "react-router-dom";
import "./style.css";
import { ShoppingCartSimple } from "phosphor-react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function HeaderComponent() {
  const {getCartQty} = useContext(CartContext)
  return (
    <header className="header">
      <Link to={"/"}>
        <h1 className="title">TicketInYourPocket</h1>
      </Link>
      <Link to={"/cart"}>
        <ShoppingCartSimple color="#fff" size={28} />
        <sub>{getCartQty()}</sub>
      </Link>
    </header>
  );
}
