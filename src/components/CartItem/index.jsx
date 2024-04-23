import './style.css'

export default function CartItemComponent({ item }) {
  return (
    <div className="cart_item">
      <span className="cart_item__description">
        {item.quantity}x - {item.title}
      </span>
      <span className="cart_item__description">R$ {(item.quantity * 27.45).toFixed(2)}</span>
    </div>
  );
}
