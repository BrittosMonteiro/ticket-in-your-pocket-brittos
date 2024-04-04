import React, { useState } from "react";
import "./style.css";
import { Ticket, Minus } from "phosphor-react";

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
        <button
          className="btn-default btn-add-to-cart"
          onClick={() => setQty(qty + 1)}
        >
          Adicionar
        </button>
        <div className="card-row">
          <button
            className="btn-default"
            onClick={() => setQty(qty - 1)}
            disabled={qty == 0}
          >
            <Minus color="#f4f8fc" />
          </button>
          <input type="text" defaultValue={qty} disabled={qty == 0} />
          <Ticket size={18} color="#f4f8fc" />
        </div>
      </div>
    </div>
  );
}
