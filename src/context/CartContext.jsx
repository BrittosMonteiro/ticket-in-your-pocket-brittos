import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const loadCart = () => {
    const getLocalCart = JSON.parse(localStorage.getItem("cart")) || [];
    if (getLocalCart.length > 0) {
      setCart(getLocalCart);
    }
  };

  useEffect(() => {
    loadCart();
  }, []);

  const addToCart = (movie, quantity) => {
    const isInCart = findItemInCart(movie.id);

    if (isInCart) {
      increaseQtyById(movie.id);
    } else {
      updateCart([...cart, { ...movie, quantity }]);
    }
  };

  const removeFromCart = (id) => {
    const isInCart = findItemInCart(id);
    if (isInCart) {
      const updatedCart = cart.filter((e) => e.id !== id);
      updateCart(updatedCart);
    }
  };

  const clearCart = () => {
    updateCart([]);
  };

  const increaseQtyById = (id) => {
    const updatedCartQuantity = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    updateCart(updatedCartQuantity);
  };

  const decreaseQtyById = (id) => {
    const updatedCartQuantity = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    updateCart(updatedCartQuantity);
  };

  const getCartQty = () => {
    const quantity =
      cart.length > 0 ? cart.reduce((acc, cur) => acc + cur.quantity, 0) : 0;
    return quantity;
  };

  const getCartTotal = () => {
    const totalItems = getCartQty();
    return totalItems * 27.45;
  };

  const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const findItemInCart = (id) => {
    const pos = cart.findIndex((e) => e.id == id);
    const data = pos >= 0 ? cart[pos] : false;
    return data;
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        removeFromCart,
        increaseQtyById,
        decreaseQtyById,
        clearCart,
        getCartQty,
        getCartTotal,
        findItemInCart,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
