import { Link } from "react-router-dom";
import "./style.css";
import { ShoppingCartSimple } from "phosphor-react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import logo from "../../../src/assets/TicketInYourPocketLogo.svg";
import Button from "../Button";

export default function HeaderComponent() {
  const { getCartQty } = useContext(CartContext);
  return (
    <header className="header">
      <Link to={"/"}>
        <img src={logo} alt="TicketInYourPocket" className="logo" />
      </Link>
      <div className="menu-right">
      <Button onClick={() => alert('Botão 1 clicado!')}>Login</Button>
      <Button onClick={() => alert('Botão 2 clicado!')}>Cadastre-se</Button>
      </div>
      <Link to={"/cart"} className="cart-link">
        <ShoppingCartSimple color="#fff" size={28} />
        <sub>{getCartQty()}</sub>
      </Link>
    </header>
  );
}
