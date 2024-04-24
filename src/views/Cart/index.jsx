import { useContext } from "react";
import ContainerComponent from "../../components/Container";
import { CartContext } from "../../context/CartContext";
import ItemListContainerComponent from "../../components/ItemListContainer";
import "./style.css";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import CartItemComponent from "../../components/CartItem";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function CartView() {
  const { getSession } = useContext(UserContext);
  const userData = getSession();
  const { cart, getCartTotal } = useContext(CartContext);
  const navigate = useNavigate();

  const db = getFirestore();
  const paymentHistoryCollection = collection(db, "paymentHistory");

  const purchase = async () => {
    if (userData) {
      const purchaseData = {
        idUser: userData.id,
        items: [],
        created_at: Date.now(),
        total: getCartTotal(),
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

      addDoc(paymentHistoryCollection, { purchaseData });
    } else {
      navigate("/login?return_to=/cart");
    }
  };
  return (
    <ContainerComponent title={"Carrinho"}>
      <div className="paybill">
        <div className="items">
          {cart.map((item) => (
            <CartItemComponent key={item.id} item={item} />
          ))}
        </div>
        <div className="cart_total">
          <span className="cart_item__description">
            R$ {getCartTotal().toFixed(2)}
          </span>
          <button className="btn_purchase" onClick={() => purchase()}>
            Finalizar
          </button>
        </div>
      </div>
      {cart.length > 0 && <ItemListContainerComponent list={cart} />}
    </ContainerComponent>
  );
}
