import VintagesList from "./VintagesList";
import SearchBar from "../reusable/SearchBar";
import { getVintages } from "../utilities/AxiosCalls";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Plus from "../../assets/icons/WhitePlusButton.svg";

function Vintages() {
  const [vintagesState, updateList] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    getVintages().then((res) => updateList(res));
    if (vintagesState !== null) {
      const results = vintagesState.filter((vintages) => {
        return vintages.vintage_name
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
    <article className="vintages">
      <section className="vintages__hero">
        <h2 className="vintages__herotext">
          Explore <i>Vintages</i>: From A to Z
        </h2>
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
        <SearchBar
          placeholder="Search.."
          addClass=""
          handleChange={handleChange}
        />
        <p className="vintages__headertext">ALL VINTAGES</p>
      </div>
      <VintagesList
        className="vintages__list"
        vintagesState={searchTerm ? searchResults : vintagesState}
      />
    </article>
  );
}

export default Vintages;
