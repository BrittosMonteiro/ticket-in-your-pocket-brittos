import React from "react";
import './style.css'

export default function ItemListContainerComponent({title, children}) {
  return (
    <section className="container">
        <h1 className="container_title">{title}</h1>
        {children}
    </section>
  );
}
