import React, { useState, useEffect } from "react";
import Star from "../../assets/icons/StarBlack.svg";
import { getReviewsImagesById, getUser } from "../utilities/AxiosCalls";
import EmptyStar from "../../assets/icons/StarGrey.svg";
import Delete from "../../assets/icons/delete.svg";
import userFriendlyTimestamp from "../utilities/FriendlyTimeStamp";
import Counter from "../utilities/Counter";

export default function ReviewsItemList({ data }) {
  const starsArr = [];
  for (let i = 0; i < data.star_review; i++) {
    starsArr.push(<img src={Star} className="star" />);
  }

  const starRemainder = 5 - starsArr.length;
  for (let i = 0; i < starRemainder; i++) {
    starsArr.push(<img src={EmptyStar} className="empty__star" />);
  }

  const [image, setImage] = useState("");

  const timestamp = (Date.now() - new Date(data.timestamp)) / 1000 / 60;

  useEffect(() => {
    getReviewsImagesById(data.id).then((resp) => {
      setImage(resp);
    });
  }, []);

  return (
    <li className="reviews__item">
      {image && (
        <img
          className="reviews__image"
          src={`http://localhost:8080/uploads/${image.imageLink}`}
        />
      )}

      <div className="temporarycontainer">
        <div className="temporarycontainer">
          <div className="temporarycontainer2">
            <p className="reviews__name">{data.User.first_name}</p>
            <p className="reviews__level">{data.user_level}</p>
          </div>
          <img
            className="reviews__profileimg"
            src={`http://localhost:8080/uploads/${data.User.user_img}`}
          />
        </div>
        <Counter data={data} />
      </div>

      <p className="reviews__review">"{data.user_review}"</p>

      <p className="reviews__starreview">{starsArr}</p>

      <p className="reviews__timestamp">
        Posted: {userFriendlyTimestamp(timestamp)}
      </p>
    </li>
  );
}
