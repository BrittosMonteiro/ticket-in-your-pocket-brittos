import { useContext } from "react";
import ContainerComponent from "../../components/Container";
import { CartContext } from "../../context/CartContext";
import ItemListContainerComponent from "../../components/ItemListContainer";
export default function CartView() {
  const { cart } = useContext(CartContext);
  return (
    <ContainerComponent title={"Carrinho"}>
      {cart.length > 0 && <ItemListContainerComponent list={cart} />}
    </ContainerComponent>
  );
}
