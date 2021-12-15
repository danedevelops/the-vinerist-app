import { Link } from "react-router-dom";
import { getWineryImagesById } from "../utilities/AxiosCalls";
import React, { useState, useEffect } from "react";

export default function WineryItem({ wineriesData }) {
  const { id, winery_name, winery_address, winery_desc } = wineriesData;
  const [image, setImage] = useState("");

  useEffect(() => {
    getWineryImagesById(id).then((resp) => {
      setImage(resp);
    });
  }, []);

  return (
    <Link to={`/wineries/${id}`} className="wineryitem__link link">
      <li className="wineries__listitem">
        {image && (
          <img
            className="wineries__image"
            src={`http://localhost:8080/uploads/${image.imageLink}`}
          />
        )}

        <p className="wineries__name"> {winery_name}</p>

        <p className="wineries__address"> {winery_address}</p>

        <p className="wineries__description"> "{winery_desc}"</p>

        <p className="wineries__link">Read More</p>
      </li>
    </Link>
  );
}
