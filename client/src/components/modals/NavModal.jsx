import Modal from "../reusable/Modal";
import Close from "../../assets/icons/CloseWindow.svg";
import { Link } from "react-router-dom";

export default function ModalNav({ setShowing }) {
  return (
    <main className="modal">
      <Modal>
        <div className="modal__content">
          <img
            className="modal__img"
            src={Close}
            onClick={() => setShowing(false)}
          />
          <Link to="/" className="link2" onClick={() => setShowing(false)}>
            <h1 className="modal__header">Home</h1>
          </Link>
          <h1 className="modal__header">Log In</h1>
          <Link
            to="/vintages"
            className="link2"
            onClick={() => setShowing(false)}
          >
            <h1 className="modal__header">Vintages</h1>
          </Link>
          <Link
            to="/wineries"
            className="link2"
            onClick={() => setShowing(false)}
          >
            <h1 className="modal__header">Wineries</h1>
          </Link>
          <h1 className="modal__header1">Subscribe</h1>
        </div>
      </Modal>
    </main>
  );
}
