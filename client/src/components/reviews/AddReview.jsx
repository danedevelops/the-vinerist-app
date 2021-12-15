import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import InputField from "../reusable/InputField";
import TextArea from "../reusable/TextArea";
import { postReview, postReviewImg, getUser } from "../utilities/AxiosCalls";
import ImgDragAndDrop from "../reusable/ImgDragAndDropPreview";
import RadioButton from "../reusable/RadioButton";
import SuccessModal2 from "../modals/SuccessModal2";
import ReactStars from "react-rating-stars-component";
import Plus from "../../assets/icons/WhitePlusButton.svg";

export default function AddReview({ routerProps }) {
  const [yourImage, setImage] = useState([]);
  const [showing, setShowing] = useState(false);
  const [stars, setStars] = useState(null);
  const [user, setUser] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newReview = {
      user_id: sessionStorage.getItem("userLoggedIn"),
      user_level: event.target.userlevel.value,
      user_review: event.target.reviewinput.value,
      star_review: stars,
      vintageID: routerProps.match.params.id,
    };

    const ReviewId = await postReview(newReview).then((res) => res.data);

    const ImageData = await storeImage().then((data) => JSON.parse(data));

    const newReviewImg = {
      reviewsID: ReviewId.id,
      imageLink: ImageData.fileName,
    };
    console.log(newReviewImg);
    postReviewImg(newReviewImg);
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

  useEffect(() => {
    getUser(sessionStorage.getItem("userLoggedIn")).then((res) =>
      setUser(res.data.first_name)
    );
  });

  return (
    <>
      <article className="vintages addreview">
        {showing ? <SuccessModal2 setShowing={setShowing} /> : ""}
        <section className="vintages__hero">
          <h2 className="vintages__herotext">Add A Review</h2>
          <div className="vintages__tabs">
            <div className="vintages__lefttab">Vintages</div>
            <div className="vintages__righttab">Wineries</div>
          </div>
        </section>

        <Link to="/vintages/add" className="link">
          <div className="vintages__addbutton">
            <img className="vintages__addicon" src={Plus} />
            <p className="vintages__text">Add New Vintage</p>
          </div>
        </Link>

        <h4 className="addreview__header">CREATE A NEW REVIEW</h4>

        <form
          className="addreview__form"
          id="addreview__form"
          onSubmit={handleSubmit}
        >
          <label className="addreview__labels">
            User Name
            <InputField
              addClass="addreview__input"
              placeholder="User Name"
              name="nameinput"
              value={user}
            />
          </label>

          <div className="addreview__radiobuttons">
            <p className="addreview__radioheader">Check Experience Level</p>
            <RadioButton name="userlevel" labelName="Novice" value="Novice" />
            <RadioButton
              name="userlevel"
              labelName="Enthusiast"
              value="Enthusiast"
            />
            <RadioButton
              name="userlevel"
              labelName="Conneisseur"
              value="Conneisseur"
            />
          </div>

          <label className="addreview__labels">
            Rating
            <ReactStars
              onChange={(event) => setStars(event)}
              count={5}
              size={24}
              activeColor="#000000"
            />
          </label>

          <label className="addreview__labels">
            Tasting Notes
            <TextArea
              addClass="addreview__input"
              placeholder="Please place your tasting notes here."
              name="reviewinput"
            />
          </label>

          <label className="addreview__labels">
            Upload Photo
            <div className="addreview__uploadcontainer">
              <ImgDragAndDrop setImage={setImage} yourImage={yourImage} />
            </div>
          </label>

          <button className="addreview__submitbutton button_1">
            Submit Review
          </button>
        </form>
      </article>
    </>
  );
}
