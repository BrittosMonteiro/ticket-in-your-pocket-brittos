import ViewTitleComponent from "./ViewTitleComponent";

export default function ContainerComponent({ title, children }) {
  return (
    <section className="max-w-screen-xl w-full h-full flex flex-col gap-8 py-8 px-4 lg:px-0">
      <ViewTitleComponent title={title} />
      {children}
    </section>
  );
}
