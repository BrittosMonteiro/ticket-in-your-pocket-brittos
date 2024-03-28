import React, { useState } from "react";
import './style.css'
import { ShoppingCartSimple } from "phosphor-react";

export default function CardComponent({ id, title }) {
  const [qty, setQty] = useState(0);
  return (
    <div className="card">
      <span className="card_title">{title}</span>
      <div className="card_btn_row">
        <button className="btn_default btn_add_to_card" onClick={() => setQty(qty+1)}>Adicionar</button>
        <span className="card_selected"><ShoppingCartSimple size={28} />{qty}</span>
      </div>
    </div>
  );
}
