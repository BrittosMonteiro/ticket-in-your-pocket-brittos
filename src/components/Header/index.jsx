import React from "react";
import './style.css'
import logo from "../../logo.svg";

export default function HeaderComponent() {
  return (
    <header className="header">
      <img src={logo} className="logo" alt="logo" />
      <input type="text" name="search_movie" className="input-default" placeholder="Procurar filme" />
      <a href="#">Acessar minha conta</a>
    </header>
  );
}
