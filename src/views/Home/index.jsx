import ContainerComponent from "../../components/Container";
import ItemListContainerComponent from "../../components/ItemListContainer";
import ProductListComponent from "../../components/ProductList";

export default function HomeView() {
  return (
    <ContainerComponent title={"Em cartaz"}>
      <ItemListContainerComponent>
        <ProductListComponent />
      </ItemListContainerComponent>
    </ContainerComponent>
  );
}
