import { Link } from "react-router-dom";
import { ShoppingCartSimple, UserCircle } from "phosphor-react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";
import LogoComponent from "./LogoComponent";

export default function HeaderComponent() {
  const { userSession, removeSession } = useContext(UserContext);
  const { getCartQty } = useContext(CartContext);

  return (
    <header className="w-full flex flex-row items-center justify-between border-b-2 py-4 px-8 sticky top-0 z-10 bg-base-100">
      <div className="flex flex-row gap-8">
        <LogoComponent />
        <span className="text-2xl text-white hidden sm:flex">
          {userSession && (
            <>
              Olá, <span className="font-semibold">{userSession.name}!</span>
            </>
          )}
        </span>
      </div>

      <div className="flex flex-row items-center gap-4">
        <Link to="/cart">
          <div className="indicator">
            {getCartQty().quantity > 0 && (
              <span className="indicator-item badge bg-orange-500 text-white">
                {getCartQty().quantity}
              </span>
            )}
            <ShoppingCartSimple size={24} weight="regular" color="#f2f4fc" />
          </div>
        </Link>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="p-0 m-0 cursor-pointer">
            <UserCircle size={24} weight="regular" color="#f2f4fc" />
          </div>
          <ul
            tabIndex={0}
            className="p-2 shadow-lg menu dropdown-content z-[1] bg-black rounded-box w-52"
          >
            {!userSession ? (
              <>
                <li>
                  <Link to="/login">Entrar</Link>
                </li>
                <li>
                  <Link to="/signup">Criar conta</Link>
                </li>
              </>
            ) : (
              <>
                <li className="font-semibold text-md p-4">
                  {userSession.name}
                </li>
                <li>
                  <Link to="/history">Meus pedidos</Link>
                </li>
                <li>
                  <a onClick={() => removeSession()}>Sair</a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
}
