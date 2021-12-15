import Modal from "../reusable/Modal";
import Close from "../../assets/icons/CloseWindow.svg";
import { Link, useHistory } from "react-router-dom";

export default function ModalSuccess2({ setShowing }) {
  const history = useHistory();
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

          <button
            onClick={() => history.goBack()}
            className="button_1 home__vintagebutton"
          >
            OK
          </button>
        </div>
      </Modal>
    </main>
  );
}
