import { useContext, useEffect, useState } from "react";
import "./style.css";
import { Ticket, Minus } from "phosphor-react";
import { CartContext } from "../../context/CartContext";
import ModalItemDetailComponent from "../ModalMovieDetail";

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
        className="w-full max-h-72 object-cover"
        onClick={() => document.getElementById(movie.id).showModal()}
      />
      <div className="card-description">
        <span
          className="card-title"
          onClick={() => document.getElementById(movie.id).showModal()}
        >
          {movie.title}
        </span>
        <button
          className="btn-default btn-add-to-cart"
          onClick={() => addTicket()}
        >
          Adicionar
        </button>
        <div className="card-row gap-4">
          <button
            className="btn-default btn-remove-from-cart"
            onClick={() => removeTicket()}
            disabled={qty == 0}
          >
            <Minus color="#f4f8fc" />
          </button>
          <span>{qty}</span>
          <Ticket size={18} color="#f4f8fc" />
        </div>
      </div>
      <ModalItemDetailComponent item={movie} />
    </div>
  );
}
