import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import ContainerComponent from "../components/ContainerComponent";
import CartListComponent from "../components/CartList";

export default function CartView() {
  const { getCartQty } = useContext(CartContext);
  document.title = 'Carrinho'

  return (
    <ContainerComponent title={"Carrinho"}>
      {getCartQty().quantity > 0 && <CartListComponent />}
      {!getCartQty().quantity && <span>Sem itens</span>}
    </ContainerComponent>
  );
}
