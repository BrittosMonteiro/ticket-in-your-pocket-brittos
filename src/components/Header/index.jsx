import { Link } from "react-router-dom";
import "./style.css";
import { ShoppingCartSimple } from "phosphor-react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import logo from "../../../src/assets/TicketInYourPocketLogo.svg";
import Button from "../Button";
import { UserContext } from "../../context/UserContext";

export default function HeaderComponent() {
  const { userSession } = useContext(UserContext);
  const { getCartQty } = useContext(CartContext);

  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="TicketInYourPocket" className="logo" />
      </Link>
      <div className="menu-right">
        {!userSession ? (
          <>
            <Link to="/login">
              <Button>Login</Button>
            </Link>
            <Link to="/signup">
              <Button>Sign Up</Button>
            </Link>
          </>
        ) : (
          <span>{userSession.name}</span>
        )}

        <Link to="/cart" className="cart-link">
          <ShoppingCartSimple color="#fff" size={28} />
          <sub>{getCartQty()}</sub>
        </Link>
      </div>
    </header>
  );
}
