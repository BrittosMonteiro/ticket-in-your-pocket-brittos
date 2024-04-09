import React, { useState } from "react";
import "./style.css";
import { Ticket, Minus } from "phosphor-react";
import { Link } from "react-router-dom";

export default function CardComponent({ movie }) {
  const [qty, setQty] = useState(0);

  const addTicket = () => {
    setQty(qty + 1);
  };

  const removeTicket = () => {
    setQty(qty - 1);
  };

  const changeQty = (newQty) => {
    if (newQty < 0 || !newQty) {
      setQty(0);
    } else {
      setQty(newQty);
    }
  };

  return (
    <div className="card">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        className="card-img"
      />
      <div className="card-description">
        <Link to={`/movie/${movie.id}`}>
          <span className="card-title">{movie.title}</span>
        </Link>
        <button
          className="btn-default btn-add-to-cart"
          onClick={() => addTicket()}
        >
          Adicionar
        </button>
        <div className="card-row">
          <button
            className="btn-default btn-remove-from-cart"
            onClick={() => removeTicket()}
            disabled={qty == 0}
          >
            <Minus color="#f4f8fc" />
          </button>
          <input
            type="text"
            className="input-qty-ticket"
            value={qty}
            disabled={qty == 0}
            onChange={(e) => changeQty(e.target.value)}
          />
          <Ticket size={18} color="#f4f8fc" />
        </div>
      </div>
    </div>
  );
}
