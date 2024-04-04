import "./style.css";

export default function ContainerComponent({ title, children }) {
  return (
    <section className="container">
      <h1 className="container_title">{title}</h1>
      {children}
    </section>
  );
}
