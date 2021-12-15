import React, { useState, useEffect } from "react";
import Hamburger from "../../assets/icons/Hamburger_Blk.svg";
import ModalNav from "../modals/NavModal";
import VineristLogo from "../../assets/icons/VineristLogoBlack.svg";
import { Link } from "react-router-dom";

function Header({ addClass }) {
  const [header, setHeader] = useState("header");
  const [showing, setShowing] = useState(false);

  const listenScrollEvent = (event) => {
    if (window.scrollY < 73) {
      return setHeader("header");
    } else if (window.scrollY > 70) {
      return setHeader("header2");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <header className={`${header} ${addClass ? addClass : ""}  `}>
      {showing ? <ModalNav setShowing={setShowing} /> : ""}
      <Link to="/" className="link">
        <img className="logo" src={VineristLogo} />
      </Link>
      <img
        className="hamburgericon"
        src={Hamburger}
        onClick={() => setShowing(true)}
      />
      <ul className="links">
        <li className="link-item">Home</li>
        <li className="link-item">Vinerist Community</li>
        <li className="link-item">Subscribe</li>
      </ul>
    </header>
  );
}

export default Header;
