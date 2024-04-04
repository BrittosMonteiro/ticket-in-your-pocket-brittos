import React, { useState } from "react";
import "./style.css";
import { ShoppingCartSimple } from "phosphor-react";

export default function CardComponent({ movie }) {
  const [qty, setQty] = useState(0);
  return (
    <div className="card">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        className="card-img"
      />
      <div className="card-description">
        <span className="card-title">{movie.title}</span>
        <button className="btn-default btn-add-to-cart">Adicionar</button>
      </div>
    </div>
  );
}
