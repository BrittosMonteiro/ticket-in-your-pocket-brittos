import { Minus, Ticket } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";

export default function HighlightedMovie({ movie }) {
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
    <div className="hero rounded min-h-64 bg-base-900 p-0">
      <div className="hero-content flex-col lg:flex-row p-0">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
          className="rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">{movie.title}</h1>
          <p className="py-6">{movie.overview}</p>
          <div className="card-row gap-8">
            <button
              className="btn-default btn-add-to-cart"
              onClick={() => addTicket()}
            >
              Adicionar
            </button>
            <div className="flex gap-4 items-center">
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
        </div>
      </div>
    </div>
  );
}
