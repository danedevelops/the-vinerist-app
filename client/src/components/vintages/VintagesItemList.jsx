import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Delete from "../../assets/icons/delete.svg";
import Stars from "../../assets/icons/5Stars.svg";
import {
  getVintagesImagesById,
  getWineryById,
  getReviewsByVintageID,
  getAverageReviews,
} from "../utilities/AxiosCalls";
import Star from "../../assets/icons/StarBlack.svg";
import EmptyStar from "../../assets/icons/StarGrey.svg";

export default function VintagesItemList({ data }) {
  const [image, setImage] = useState("");
  const [wineryData, updateDetails] = useState("");
  const [reviewsData, updateReviews] = useState("");
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
    getAverageReviews(data.id).then((resp) =>
      setAvg(Math.round(resp.data.avg.star_review))
    );
  }, [data.id]);

  useEffect(() => {
    getWineryById(data.assoc_winery).then((resp) => updateDetails(resp));
  }, [data.assoc_winery]);

  useEffect(() => {
    getReviewsByVintageID(data.id).then((res) => updateReviews(res));
  }, [data.id]);

  useEffect(() => {
    getVintagesImagesById(data.id).then((resp) => {
      setImage(resp);
    });
  }, []);

  return (
    <li className="vintages__item">
      {image && (
        <img
          className="vintages__image"
          src={`http://localhost:8080/uploads/${image.imageLink}`}
        />
      )}

      <div className="vintages__leftcontainer">
        <span className="vintages__separator">
          <Link to={`/vintages/${data.id}`} className="vintages__name link">
            {data.vintage_name}
          </Link>
        </span>

        <span className="vintages__separator">
          <p className="vintages__vineyardyear">
            {wineryData.winery_name}, {data.vintage_year}
          </p>
        </span>
      </div>

      <div className="vintages__rightcontainer">
        <p className="vintages__reviews"> {reviewsData.length} Reviewers</p>
        <img className="vintages__delete" src={Delete} />
      </div>

      <span className="vintages__description">
        <p className="wh-details__descriptiontext">"{data.description}"</p>
      </span>

      <div className="vintages__bottomcontainer">
        <p className="reviews__starreview"> {starsArr} </p>
        <Link className="vintages__link link" to={`/vintages/${data.id}`}>
          Read More
        </Link>
      </div>
    </li>
  );
}
