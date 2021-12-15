import WineriesList from "./WineriesList";
import SearchBar from "../reusable/SearchBar";
import { Link } from "react-router-dom";
import { getWineries } from "../utilities/AxiosCalls";
import React, { useEffect, useState } from "react";
import Plus from "../../assets/icons/WhitePlusButton.svg";

function Wineries() {
  const [wineriesState, updateList] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    getWineries().then((res) => updateList(res));
    if (wineriesState !== null) {
      const results = wineriesState.filter((winery) => {
        return winery.winery_name
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(results);
    }
  }, [searchTerm]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <article className="wineries">
      <section className="wineries__hero">
        <h2 className="wineries__herotext">
          Uniquely Naramata <i>Wineries</i>
        </h2>
        <div className="wineries__tabs">
          <Link to="/vintages" className="wineries__lefttab">
            <div className="wineries__lefttab">Vintages</div>
          </Link>
          <Link to="/wineries" className="wineries__righttab">
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
      <div className="wineries__container">
        <SearchBar
          addClass=""
          placeholder="Search..."
          handleChange={handleChange}
        />
        <p className="wineries__header">ALL WINERIES</p>
        <WineriesList
          className="wineries__list"
          wineriesState={searchTerm ? searchResults : wineriesState}
        />
      </div>
    </article>
  );
}

export default Wineries;
