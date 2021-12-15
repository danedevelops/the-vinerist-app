export default function Modal({ addClass, children }) {
  return (
    <section className={`modal__section ${addClass ? addClass : ""}`}>
      {children}
    </section>
  );
}
