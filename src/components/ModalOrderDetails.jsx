import OrderDetailsListComponent from "./OrderDetailsList";

export default function ModalOrderDetailsComponent({ order }) {
  return (
    <>
      <label htmlFor={order.id} className="btn btn-accent btn-md">
        Detalhes
      </label>
      <input type="checkbox" id={order.id} className="modal-toggle" />
      <div className="modal gap-8" role="dialog">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Pedido: {order.id}</h3>
          <OrderDetailsListComponent list={order.items} hideSubAndDetail/>
          <h3 className="text-lg font-bold">Total: {order.total}</h3>
        </div>
        <label className="modal-backdrop" htmlFor={order.id}>
          Close
        </label>
      </div>
    </>
  );
}
