import React from "react";
import "./App.css";
import HeaderComponent from "./components/Header";
import ItemListContainerComponent from "./components/ItemListContainer/ItemListContainerComponent";
import ProductListComponent from "./components/ProductList/ProductList";

export default function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <main className="main">
        <ItemListContainerComponent title={'Em cartaz'}>
          <ProductListComponent />
        </ItemListContainerComponent>
      </main>
    </div>
  );
}
