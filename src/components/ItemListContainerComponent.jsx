import CardComponent from "./Card";

// eslint-disable-next-line react/prop-types
export default function ItemListContainerComponent({ list }) {
  return (
    <div className="flex flex-row flex-wrap w-full gap-8 justify-start">
      {list.map((movie) => (
        <CardComponent key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
