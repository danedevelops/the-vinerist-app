import Modal from "../reusable/Modal";
import Close from "../../assets/icons/CloseWindow.svg";
import { Link } from "react-router-dom";

export default function ModalSuccess({ setShowing }) {
  return (
    <main className="modal">
      <Modal>
        <div className="modal__content">
          <img
            className="modal__img"
            src={Close}
            onClick={() => setShowing(false)}
          />
          <h1 className="modal__header3">
            Your Changes Have Been Recorded Successfully
          </h1>
          <Link to="/vintages" className="link">
            <button className="button_1 home__vintagebutton">OK</button>
          </Link>
        </div>
      </Modal>
    </main>
  );
}
