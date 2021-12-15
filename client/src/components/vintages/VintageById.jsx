import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  getVintageById,
  getReviewsByVintageID,
  getVintagesImagesById,
  getAverageReviews,
} from "../utilities/AxiosCalls";
import ReviewsItemList from "../reviews/ReviewsItemList";
import Plus from "../../assets/icons/WhitePlusButton.svg";
import PlusB from "../../assets/icons/GroupBlack.svg";
import Back from "../../assets/icons/Back.svg";
import Star from "../../assets/icons/StarBlack.svg";
import EmptyStar from "../../assets/icons/StarGrey.svg";

export default function VintageById({ routerProps }) {
  const id = routerProps.match.params.id;
  const [reviewsData, updateReviews] = useState("");
  console.log(reviewsData);
  const [vintageData, updateDetails] = useState(null);
  const [image, setImage] = useState("");
  const [avg, setAvg] = useState("");
  const starsArr = [];
  for (let i = 0; i < avg; i++) {
    starsArr.push(<img src={Star} className="star" />);
  }

  const starRemainder = 5 - avg;
  for (let i = 0; i < starRemainder; i++) {
    starsArr.push(<img src={EmptyStar} className="empty__star" />);
  }

  useEffect(() => {
    getVintageById(id).then((resp) => updateDetails(resp));
  }, [id]);

  useEffect(() => {
    getAverageReviews(id).then((resp) =>
      setAvg(Math.round(resp.data.avg.star_review))
    );
  }, [id]);

  useEffect(() => {
    getReviewsByVintageID(id).then((res) => updateReviews(res));
  }, [id]);

  useEffect(() => {
    getVintagesImagesById(id).then((resp) => {
      setImage(resp);
    });
  }, []);

  return vintageData === null ? (
    <h1>Loading Details</h1>
  ) : (
    <article className="vintages">
      <section className="vintages__hero">
        <h2 className="vintages__herotext">Selected Vintage</h2>
        <div className="vintages__tabs">
          <Link to="/vintages" className="link vintages__lefttab">
            <div className="vintages__lefttab">Vintages</div>
          </Link>
          <Link to="/wineries" className="link vintages__righttab">
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
      <div className="vintages__container">
        <Link to="/vintages" className="link">
          <p className="vintages__backtext">
            <img src={Back} className="vintages__back" />
            Vintages /{" "}
            <span className="wineries__backactive">
              {vintageData.vintage_name}
            </span>
          </p>
        </Link>
        <p className="vintages__headertext2">TASTING NOTES</p>

        {image && (
          <img
            className="vintages__test"
            src={`http://localhost:8080/uploads/${image.imageLink}`}
          />
        )}

        <div className="vintages__infocontainer">
          <div className="vintages__leftcontainer">
            <p className="vintages__vintname">{vintageData.vintage_name}</p>
            <p className="vintages__vintinfo">
              {vintageData.Wineries.winery_name}, {vintageData.vintage_year}
            </p>
          </div>
          <div className="vintages__rightcontainer">
            {" "}
            {reviewsData.length} Reviewer(s)
          </div>
        </div>
        <p className="reviews__starreview"> {starsArr} </p>
        <p className="vintages__vintdesc">{vintageData.description}</p>

        <Link to={`/reviews/add/${vintageData.id}`} className="link">
          <div className="vintages__addreview">
            <img className="vintages__plus" src={PlusB} />
            <p className="vintages__addtext">Add Review</p>
          </div>
        </Link>
        <p>REVIEWS</p>
      </div>
      <ul className="reviews">
        {reviewsData &&
          reviewsData.map((reviewsItemList) => {
            return (
              <ReviewsItemList
                vintageID={id}
                key={reviewsItemList}
                data={reviewsItemList}
              />
            );
          })}
      </ul>
    </article>
  );
}
