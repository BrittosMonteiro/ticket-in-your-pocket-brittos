import { useContext, useEffect, useState } from "react";
import "./style.css";
import { Ticket, Minus } from "phosphor-react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

// eslint-disable-next-line react/prop-types
export default function CardComponent({ movie }) {
  const { addToCart, findItemInCart, decreaseQtyById, removeFromCart } =
    useContext(CartContext);
  const [qty, setQty] = useState(0);

  const addTicket = () => {
    setQty(qty + 1);
    addToCart(movie, qty + 1);
  };

  const removeTicket = () => {
    const quantity = qty - 1;
    setQty(quantity);
    quantity > 0 ? decreaseQtyById(movie.id) : removeFromCart(movie.id);
  };

  const changeQty = (newQty) => {
    if (newQty < 0 || !newQty) {
      setQty(0);
    } else {
      setQty(newQty);
    }
  };

  const isMovieInCart = () => {
    const movieData = findItemInCart(movie.id);
    if (movieData) {
      setQty(movieData.quantity);
    }
  };

  useEffect(() => {
    isMovieInCart();
  }, []);

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
