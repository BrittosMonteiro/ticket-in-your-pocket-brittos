export default function ModalItemDetailComponent({ item }) {
  return (
    <dialog id={item.id} className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">{item.title}</h3>
        <p className="py-4">{item.overview}</p>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn">Fechar</button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
