import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputField from "../reusable/InputField";
import TextArea from "../reusable/TextArea";
import { postWinery } from "../utilities/AxiosCalls";
import { postWineryImg } from "../utilities/AxiosCalls";
import ImgDragAndDrop from "../reusable/ImgDragAndDropPreview";
import SuccessModal from "../modals/SuccessModal";
import Plus from "../../assets/icons/WhitePlusButton.svg";
import Back from "../../assets/icons/Back.svg";

export default function AddWinery() {
  const [yourImage, setImage] = useState([]);
  const [showing, setShowing] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newWinery = {
      winery_name: event.target.nameinput.value,
      winery_address: event.target.addressinput.value,
      winery_desc: event.target.descriptioninput.value,
      coordinates: "49",
    };

    const WineryId = await postWinery(newWinery).then((res) => res.data);

    const ImageData = await storeImage().then((data) => JSON.parse(data));

    const newWineryImg = {
      wineryID: WineryId.id,
      imageLink: ImageData.fileName,
    };

    postWineryImg(newWineryImg);
    setShowing(true);
  };

  const storeImage = (id) => {
    let formData = new FormData();

    formData.append("avatar", yourImage[0]);

    return fetch("http://localhost:8080/uploadFile", {
      method: "post",
      body: formData,
    }).then((res) => res.text());
  };

  return (
    <>
      <article className="wineries">
        {showing ? <SuccessModal setShowing={setShowing} /> : ""}
        <section className="wineries__hero">
          <h2 className="wineries__herotext">Wineries</h2>
          <div className="wineries__tabs">
            <Link to="/vintages" className="wineries__lefttab">
              <div className="wineries__lefttab">Vintages</div>
            </Link>
            <Link to="/vintages" className="wineries__righttab">
              <div className="wineries__righttab">Wineries</div>
            </Link>
          </div>
        </section>
        <Link to="/wineries/add" className="link">
          <div className="vintages__addbutton">
            <img className="vintages__addicon" src={Plus} />
            <p className="vintages__text">Add New Winery</p>
          </div>
        </Link>
        <div className="wineries__idcontainer">
          <Link to="/wineries" className="link">
            <p className="wineries__back">
              <img src={Back} className="vintages__back" />
              Wineries /{" "}
              <span className="wineries__backactive">&nbsp;Add Winery</span>
            </p>
          </Link>

          <p className="wineries__header">CREATE A NEW LISTING</p>
        </div>
        <form
          className="wineries__form"
          id="addwinery_form"
          onSubmit={handleSubmit}
        >
          <label className="wineries__labels">
            Winery Name
            <InputField
              addClass="addreview__input"
              placeholder="Winery Name"
              name="nameinput"
            />
          </label>

          <label className="wineries__labels">
            Street Address
            <InputField
              addClass="aaddreview__input"
              placeholder="Winery Address"
              name="addressinput"
            />
          </label>

          <label className="wineries__labels">
            Description
            <TextArea
              addClass="addreview__input"
              placeholder="Description"
              name="descriptioninput"
            />
          </label>
          {/* commented out until GoogleAPI functionality is added
          <label className="wineries__labels">
            Coordinates
            <InputField
              addClass="addreview__input"
              placeholder="Coordinates"
              name="coordinatesinput"
            />
          </label> */}

          <label className="wineries__labels">
            Upload Photo
            <div className="addreview__uploadcontainer">
              <ImgDragAndDrop setImage={setImage} yourImage={yourImage} />
            </div>
          </label>

          <button className="addreview__submitbutton button_1">
            Submit Winery
          </button>
        </form>
      </article>
    </>
  );
}
