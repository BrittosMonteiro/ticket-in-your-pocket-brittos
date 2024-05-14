export default function ContainerComponent({ title, children }) {
  return (
    <section className="max-w-screen-xl w-full h-full flex flex-col gap-8 py-8 px-4 lg:px-0">
      <h1 className="text-white text-2xl font-semibold">{title}</h1>
      {children}
    </section>
  );
}
