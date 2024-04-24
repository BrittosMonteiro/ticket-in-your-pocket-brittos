import "./style.css";

export default function ContainerComponent({ title, children }) {
  return (
    <section className="max-w-screen-xl w-full h-full flex flex-col gap-8 px-4">
      <h1 className="container_title">{title}</h1>
      {children}
    </section>
  );
}
