import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartListItemComponent from "./CartListItem";
import { CartContext } from "../context/CartContext";

export default function CartListComponent() {
  const { cart, getCartQty, purchase } = useContext(CartContext);
  const navigate = useNavigate();

  const finishCart = async () => {
    const request = await purchase();
    if (request instanceof Error) {
      navigate("/login?return_to=/cart");
    }
  };

  return (
    <div className="overflow-x-auto text-white">
      <table className="table">
        <thead>
          <tr>
            <th>Item</th>
            <th></th>
            <th>Quantidade</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <CartListItemComponent item={item} key={item.id} />
          ))}
          <tr>
            <td></td>
            <td></td>
            <td>{getCartQty().quantity}</td>
            <td>
              <button
                className="btn btn-sm btn-success"
                onClick={() => finishCart()}
              >
                Finalizar compra - R$ {getCartQty().total}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
