import CardComponent from "../Card";
import "./style.css";

// eslint-disable-next-line react/prop-types
export default function ItemListContainerComponent({ list }) {
  return (
    <>
      {list.length > 0 && (
        <section className="content">
          {list.map((movie) => (
            <CardComponent key={movie.id} movie={movie} />
          ))}
        </section>
      )}
    </>
  );
}
