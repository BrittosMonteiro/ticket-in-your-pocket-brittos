import ModalItemDetailComponent from "./ModalMovieDetail";

export default function CartListItemComponent({ item, hideSubAndDetail }) {
  return (
    <>
      <tr>
        <td
          onClick={() =>
            !hideSubAndDetail && document.getElementById(item.id).showModal()
          }
        >
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div>
              <div className="font-bold">{item.title}</div>
            </div>
          </div>
        </td>
        <td></td>
        <td>{item.quantity}</td>
        {!hideSubAndDetail && (
          <td>R$ {(item.quantity * 27.45).toFixed(2).replace(".", ",")}</td>
        )}
      </tr>

      {!hideSubAndDetail && <ModalItemDetailComponent item={item} />}
    </>
  );
}
