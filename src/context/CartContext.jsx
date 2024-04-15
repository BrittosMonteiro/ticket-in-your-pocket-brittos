import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // useEffect(() => {
  //   const cartStore = getCartStore();
  //   if (cartStore) setCart(cartStore);
  // }, []);

  const addToCart = (id, quantity) => {
    // const isInCart = findItemInCart(product.id, cart);
    // if (isInCart) {
    //   increaseQtyById(product.id, quantity);
    // } else {
    //   setCartStore([...cart, { product, quantity }]);
    //   updateCart([...cart, { product, quantity }]);
    // }
  };

  const removeFromCart = (id) => {
    // const isInCart = findItemInCart(id, cart);
    // if (isInCart) {
    //   const updatedCart = cart.filter((e) => e.product.id !== id);
    //   setCartStore(updatedCart);
    //   updateCart(updatedCart);
    // }
  };

  const clearCart = () => {
    // removeStore();
    // updateCart([]);
  };

  const increaseQtyById = (id, quantity) => {
    // const updatedCartQuantity = cart.map((item) => {
    //   if (item.product.id === id) {
    //     return { ...item, quantity: item.quantity + quantity };
    //   }
    //   return item;
    // });
    // setCartStore(updatedCartQuantity);
    // updateCart(updatedCartQuantity);
  };

  const getCartQty = () => {
    return cart.reduce((acc, cur) => acc + cur.quantity, 0);
  };

  const updateCart = (newCart) => {
    // setCart(newCart);
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        removeFromCart,
        increaseQtyById,
        clearCart,
        getCartQty,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
