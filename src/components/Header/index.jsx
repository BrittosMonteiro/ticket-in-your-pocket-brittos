import "./style.css";
import { ShoppingCartSimple } from "phosphor-react";

export default function HeaderComponent() {
  return (
    <header className="header">
      <h1 className="title">TicketInYourPocket</h1>
      <a href="#">Comédia</a>
      <a href="#">Drama</a>
      <a href="#">Terror</a>
      <a href="#">Em alta</a>
      <a href="#">Meus ingressos</a>
      <a href="#">Minha conta</a>
      <ShoppingCartSimple color="#fff" size={28} />
    </header>
  );
}
