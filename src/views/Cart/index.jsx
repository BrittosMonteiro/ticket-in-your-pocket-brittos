import { useContext } from "react";
import ContainerComponent from "../../components/Container";
import { CartContext } from "../../context/CartContext";
import CartListComponent from "../../components/CartList";

export default function CartView() {
  const { getCartQty } = useContext(CartContext);
  return (
    <ContainerComponent title={"Carrinho"}>
      {getCartQty().quantity > 0 && <CartListComponent />}
      {!getCartQty().quantity && <span>Sem itens</span>}
    </ContainerComponent>
  );
}
