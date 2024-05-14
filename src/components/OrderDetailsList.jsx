import CartListItemComponent from "./CartListItem";

export default function ModalOrderDetailsListComponent({
  list,
  hideSubAndDetail,
}) {
  return (
    <div className="overflow-x-auto text-white">
      <table className="table">
        <thead>
          <tr>
            <th>Item</th>
            <th></th>
            <th>Quantidade</th>
            {!hideSubAndDetail && <th>Subtotal</th>}
          </tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <CartListItemComponent
              item={item}
              key={item.id}
              hideSubAndDetail={hideSubAndDetail}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
