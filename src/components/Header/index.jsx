import { Link } from "react-router-dom";
import "./style.css";
import { ShoppingCartSimple } from "phosphor-react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import logo from "../../../src/assets/TicketInYourPocketLogo.svg";
import Button from "../Button";
import { UserContext } from "../../context/UserContext";

export default function HeaderComponent() {
  const { getSession, removeSession } = useContext(UserContext);
  const userData = getSession()
  const { getCartQty } = useContext(CartContext);

  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="TicketInYourPocket" className="logo" />
      </Link>
      <div className="menu-right">
        {!userData ? (
          <>
            <Link to="/login">
              <Button>Login</Button>
            </Link>
            <Link to="/signup">
              <Button>Sign Up</Button>
            </Link>
          </>
        ) : (
          <>
            <span>{userData.name}</span>
            <Link to="/history">Histórico de compras</Link>
            <button onClick={() => removeSession()}>Sair</button>
          </>
        )}

        <Link to="/cart" className="cart-link">
          <ShoppingCartSimple color="#fff" size={28} />
          <sub>{getCartQty()}</sub>
        </Link>
      </div>
    </header>
  );
}
