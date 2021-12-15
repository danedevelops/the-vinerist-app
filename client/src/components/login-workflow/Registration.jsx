import { useState } from "react";
import { useHistory } from "react-router-dom";
import { registerUser, postUserImg } from "../utilities/AxiosCalls";
import ImgDragAndDrop from "../reusable/ImgDragAndDropPreview";
import { Link } from "react-router-dom";

export default function Registration() {
  const history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [yourImage, setImage] = useState([]);

  const validateFields = (event) => {
    let valid = true;

    if (!firstName) {
      event.target.firstName.parentElement.classList.add("error__input-blank");
      valid = false;
    }
    if (!lastName) {
      event.target.lastName.parentElement.classList.add("error__input-blank");
      valid = false;
    }
    if (!userEmail) {
      event.target.userEmail.parentElement.classList.add("error__input-blank");
      valid = false;
    }
    if (!password) {
      event.target.password.parentElement.classList.add("error__input-blank");
      valid = false;
    }
    if (!passwordConfirm) {
      event.target.passwordConfirm.parentElement.classList.add(
        "error__input-blank"
      );
      valid = false;
    }

    return valid;
  };

  const clearError = (event) => {
    event.target.parentElement.classList.remove("error__input-blank");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (validateFields(event) && password === passwordConfirm) {
      await registerUser({
        firstName: firstName,
        lastName: lastName,
        userEmail: userEmail,
        password: password,
      }).then((res) => {
        sessionStorage.setItem("userLoggedIn", res.data.user.id);
        handleStatus(res.status, event) && history.push("/users");
      });
    }

    const ImageData = await storeImage().then((data) => JSON.parse(data));

    const newUserImg = {
      id: sessionStorage.getItem("userLoggedIn"),
      user_img: ImageData.fileName,
    };

    postUserImg(newUserImg);
  };

  const storeImage = (id) => {
    let formData = new FormData();

    formData.append("avatar", yourImage[0]);

    return fetch("http://localhost:8080/uploadFile", {
      method: "post",
      body: formData,
    }).then((res) => res.text());
  };

  const handleStatus = (status, event) => {
    if (status === 201) {
      event.target.classList.remove("error__duplicate-user-exists");
      return true;
    }
    if (status === 400) {
      event.target.classList.add("error__duplicate-user-exists");
      return false;
    }
  };

  const comparePasswords = (event) => {
    event.target.value === password
      ? event.target.parentElement.classList.remove(
          "error__confirm-password-mismatch"
        )
      : event.target.parentElement.classList.add(
          "error__confirm-password-mismatch"
        );
  };

  return (
    <article className="vintages">
      <section className="vintages__hero">
        <h2 className="vintages__herotext">Please Register Below</h2>
      </section>
      <form
        className="welcome-screen__default-form vintages__form"
        onSubmit={handleSubmit}
      >
        <label className="addreview__labels">
          First Name
          <input
            name="firstName"
            onChange={(event) => {
              setFirstName(event.target.value);
              clearError(event);
            }}
            className="vintages__input reusable__input"
            type="text"
            placeholder="Joe"
          />
        </label>
        <label className="addreview__labels">
          Last Name
          <input
            name="lastName"
            onChange={(event) => {
              setLastName(event.target.value);
              clearError(event);
            }}
            className="vintages__input reusable__input"
            type="text"
            placeholder="Smith"
          />
        </label>
        <label className="addreview__labels">
          Email
          <input
            name="userEmail"
            onChange={(event) => {
              setUserEmail(event.target.value);
              clearError(event);
            }}
            className="vintages__input reusable__input"
            type="text"
            placeholder="joesmith@gmail.com"
          />
        </label>
        <label className="addreview__labels">
          Password
          <input
            name="password"
            onChange={(event) => {
              setPassword(event.target.value);
              clearError(event);
            }}
            className="vintages__input reusable__input"
            type="password"
          />
        </label>
        <label className="addreview__labels">
          Confirm Password
          <input
            name="passwordConfirm"
            onChange={(event) => {
              setPasswordConfirm(event.target.value);
              clearError(event);
              comparePasswords(event);
            }}
            className="vintages__input reusable__input"
            type="password"
          />
        </label>
        <label className="addreview__labels">
          Upload Photo
          <div className="addreview__uploadcontainer">
            <ImgDragAndDrop setImage={setImage} yourImage={yourImage} />
          </div>
        </label>
        <button className="addreview__submitbutton button_1">Register</button>
      </form>
    </article>
  );
}
