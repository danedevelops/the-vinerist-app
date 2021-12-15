import Insta from "../../assets/icons/Insta.svg";
import FB from "../../assets/icons/FB.svg";
import Twitter from "../../assets/icons/Twitter.svg";
import VineristLogo from "../../assets/icons/VineristLogoBlack.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__left">
        <img className="footer__logo" src={VineristLogo} />
        <p className="footer__address">134 Lower Bench Rd. Naramata</p>
        <p className="footer__phone">1 (250) 763-3456</p>
      </div>
      <div className="footer__right">
        <img className="footer__icon" src={FB} />
        <img className="footer__icon" src={Insta} />
        <img className="footer__icon" src={Twitter} />
      </div>
    </footer>
  );
}

export default Footer;
