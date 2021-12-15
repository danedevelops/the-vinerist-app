import React, { useState, useEffect } from "react";
import {
  getWineryById,
  getVintageByWineryID,
  getWineryImagesById,
} from "../utilities/AxiosCalls";
import VintageByWineryID from "./VintageByWineryIdList";
import { Link } from "react-router-dom";
import Plus from "../../assets/icons/WhitePlusButton.svg";
import Back from "../../assets/icons/Back.svg";

const APIKEY = "AIzaSyDUwRW_uNGRdzMrflNxVr8R0ljZ78seXVk";

export default function WineryById({ routerProps }) {
  const id = routerProps.match.params.id;
  const [img, setImg] = useState(null);
  const [wineryData, updateDetails] = useState(null);
  const [vintageData, updateVintageData] = useState(null);

  useEffect(() => {
    getWineryById(id).then((resp) => updateDetails(resp));
    getWineryImagesById(id).then((resp) => setImg(resp));
    getVintageByWineryID(id).then((resp) => updateVintageData(resp));
  }, [id]);

  return wineryData === null || img === null ? (
    <h1>Loading Winery Details</h1>
  ) : (
    <article className="wineries">
      <section className="wineries__hero">
        <h2 className="wineries__herotext">
          Uniquely Naramata <i>Wineries</i>
        </h2>
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
            <span className="wineries__backactive">
              &nbsp; {wineryData.winery_name}
            </span>
          </p>
        </Link>
        <img
          className="vintages__img"
          src={`http://localhost:8080/uploads/${img.imageLink}`}
        />
        <p className="wineries__name"> {wineryData.winery_name}</p>
        <p className="wineries__address"> {wineryData.winery_address}</p>
        <p className="wineries__description"> "{wineryData.winery_desc}"</p>
        {/* <iframe
          className="google__iframe"
          frameborder="0"
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDUwRW_uNGRdzMrflNxVr8R0ljZ78seXVk&q=${wineryData.winery_address}&zoom=15`}
          allowfullscreen
        ></iframe> */}
        <iframe
          className="google__iframe"
          src="https://snazzymaps.com/embed/284820"
        ></iframe>
        <p className="wineries__header">POPULAR VINTAGES</p>
      </div>
      <VintageByWineryID vintageData={vintageData} />
    </article>
  );
}
