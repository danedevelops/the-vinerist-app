import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getVintagesImagesById } from "../utilities/AxiosCalls";

export default function VintageByWineryIDItem({ vintageData }) {
  const { id, vintage_name, vintage_year, description } = vintageData;

  const [img, setImg] = useState(null);

  useEffect(() => {
    getVintagesImagesById(id).then((resp) => {
      setImg(resp);
    });
  }, []);

  return img === null ? (
    <h1>Loading Winery Details</h1>
  ) : (
    <li className="wineries__idlistitem">
      <Link to={`/vintages/${id}`} className="link">
        <img
          src={`http://localhost:8080/uploads/${img.imageLink}`}
          className="wineries__wineriesidimg"
        />
      </Link>

      <div className="wineries__vintagecontainer">
        <Link to={`/vintages/${id}`} className="link">
          <p className="wineries__vintagename"> {vintage_name}</p>
        </Link>

        <Link to={`/vintages/${id}`} className="ink">
          <p className="wineries__vintageyear"> {vintage_year}</p>
        </Link>
      </div>

      <Link to={`/vintages/${id}`} className="link">
        <p className="wineries__vintagedescription"> {description}</p>
      </Link>
    </li>
  );
}
