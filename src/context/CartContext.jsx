import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

export const CartContext = createContext();

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
  const { userSession } = useContext(UserContext);

  const db = getFirestore();
  const purchaseHistoryCollection = collection(db, "purchaseHistory");

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
      const subtotal = calcSubtotal(quantity);
      updateCart([...cart, { ...movie, quantity, subtotal }]);
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
        const subtotal = calcSubtotal(item.quantity + 1);
        return { ...item, quantity: item.quantity + 1, subtotal };
      }
      return item;
    });
    updateCart(updatedCartQuantity);
  };

  const decreaseQtyById = (id) => {
    const updatedCartQuantity = cart.map((item) => {
      if (item.id === id) {
        const subtotal = calcSubtotal(item.quantity - 1);
        return { ...item, quantity: item.quantity - 1, subtotal };
      }
      return item;
    });
    updateCart(updatedCartQuantity);
  };

  const getCartQty = () => {
    const quantity =
      cart.length > 0 ? cart.reduce((acc, cur) => acc + cur.quantity, 0) : 0;

    const total = calcSubtotal(quantity).toFixed(2).replace(".", ",");
    return { quantity, total };
  };

  const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const calcSubtotal = (quantity) => {
    return quantity * 27.9;
  };

  const findItemInCart = (id) => {
    const pos = cart.findIndex((e) => e.id == id);
    const data = pos >= 0 ? cart[pos] : false;
    return data;
  };

  const purchase = () => {
    try {
      if (!userSession) {
        throw new Error();
      }

      const purchaseData = {
        idUser: userSession.id,
        items: [],
        created_at: Date.now(),
        total: getCartQty().total,
      };

      for (let item of cart) {
        const data = {
          backdrop_path: item.backdrop_path,
          id: item.id,
          poster_path: item.poster_path,
          title: item.title,
        };

        purchaseData.items.push(data);
      }

      const finish = addDoc(purchaseHistoryCollection, purchaseData);
      if (finish) {
        clearCart();
      }
    } catch (err) {
      return err;
    }
  };

  const getPurchaseHistory = async () => {
    const db = getFirestore();

    const getHistory = query(
      collection(db, "purchaseHistory"),
      where("idUser", "==", "Eubfw09SFMqzH8cXAPbW")
    );

    const docs = await getDocs(getHistory);

    console.log(docs.size);
    docs.forEach((doc) => {
      if (doc.exists()) {
        console.log(doc);
      }
    });
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
        findItemInCart,
        purchase,
        getPurchaseHistory,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
