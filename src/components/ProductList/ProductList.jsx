import React from "react";
import "./style.css";
import CardComponent from "../Card/CardComponent";

export default function ProductListComponent() {
  const product_list = [
    {
      id: 1,
      name: "Teste 1",
    },
    {
      id: 2,
      name: "Teste 2",
    },
    {
      id: 3,
      name: "Teste 3",
    },
    {
      id: 4,
      name: "Teste 4",
    },
  ];

  return (
    <div className="product_list">
      {product_list.map((item, index) => (
        <CardComponent key={index} id={item.id} title={item.name} />
      ))}
    </div>
  );
}
