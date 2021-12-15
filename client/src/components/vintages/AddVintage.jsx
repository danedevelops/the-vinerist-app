import { Link } from "react-router-dom";
import InputField from "../reusable/InputField";

import DropDownList from "../reusable/DropDownList";
import React, { useState, useEffect } from "react";
import { postVintageImg } from "../utilities/AxiosCalls";
import { postVintage } from "../utilities/AxiosCalls";
import { getWineryIDandName } from "../utilities/AxiosCalls";
import ImgDragAndDrop from "../reusable/ImgDragAndDropPreview";
import Plus from "../../assets/icons/WhitePlusButton.svg";
import SuccessModal3 from "../modals/SuccessModal";
import Back from "../../assets/icons/Back.svg";
import TextArea from "../reusable/TextArea";

export default function AddVintage() {
  const [AbbrevList, updateAbbrevList] = useState(null);
  const [yourImage, setImage] = useState([]);
  const [showing, setShowing] = useState(false);

  useEffect(() => {
    getWineryIDandName().then((resp) => {
      const newArray = resp.map((item) => {
        return { option: item.winery_name, value: item.id };
      });
      updateAbbrevList(newArray);
    });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newVintage = {
      vintage_name: event.target.nameinput.value,
      vintage_year: event.target.yearinput.value,
      description: event.target.descriptioninput.value,
      wineries: event.target.associatedwinery.value,
    };

    const VintageId = await postVintage(newVintage).then((res) => res.data);

    const ImageData = await storeImage().then((data) => JSON.parse(data));

    const newVintageImg = {
      vintagesID: VintageId.id,
      imageLink: ImageData.fileName,
    };

    postVintageImg(newVintageImg);
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
      <article className="vintages">
        {showing ? <SuccessModal3 setShowing={setShowing} /> : ""}
        <section className="vintages__hero">
          <h2 className="vintages__herotext">
            {" "}
            Explore <i>Vintages</i>: From A to Z
          </h2>
          <div className="vintages__tabs">
            <Link to="/vintages" className="link vintages__lefttab">
              <div className="vintages__lefttab">Vintages</div>
            </Link>
            <Link to="/vintages" className="link vintages__righttab">
              <div className="vintages__righttab">Wineries</div>
            </Link>
          </div>
        </section>

        <Link to="/vintages/add" className="link">
          <div className="vintages__addbutton">
            <img className="vintages__addicon" src={Plus} />
            <p className="vintages__text">Add New Vintage</p>
          </div>
        </Link>
        <div className="vintages__container2">
          <Link to="/vintages" className="link">
            <p className="vintages__backtext">
              <img src={Back} className="vintages__back" />
              Vintages /{" "}
              <span className="wineries__backactive">Add Vintage</span>
            </p>
          </Link>
        </div>
        <p className="vintages__formheader">CREATE A NEW LISTING</p>
        <form
          className="vintages__form"
          id="addvintage__form"
          onSubmit={handleSubmit}
        >
          <label className="vintages__labels">
            Vintage Name
            <InputField
              addClass="vintages__input"
              placeholder="Reserve Shiraz"
              name="nameinput"
            />
          </label>

          <label className="vintages__labels">
            Vintage Year
            <InputField
              addClass="vintages__input"
              placeholder="2011"
              name="yearinput"
            />
          </label>

          <label className="vintages__labels">Associated Winery</label>
          <DropDownList
            addClass="form__forminput"
            name="associatedwinery"
            options={AbbrevList}
          />

          <label className="vintages__labels">
            Description
            <TextArea
              addClass="vintages__input"
              placeholder="Place description here"
              name="descriptioninput"
            />
          </label>

          <label className="addreview__labels">
            Upload Photo
            <div className="addreview__uploadcontainer">
              <ImgDragAndDrop setImage={setImage} yourImage={yourImage} />
            </div>
          </label>

          <button className="addreview__submitbutton button_1">
            Submit Vintage
          </button>
        </form>
      </article>
    </>
  );
}
