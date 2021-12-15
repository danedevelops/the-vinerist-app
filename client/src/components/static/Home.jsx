import Moderator1 from "../../assets/images/ben.jpg";
import Moderator2 from "../../assets/images/sarah.jpg";
import Winery from "../../assets/images/winery.jpg";
import Glass from "../../assets/images/glass.jpg";
import Glass2 from "../../assets/images/glass2.jpg";
import Grapes from "../../assets/images/grapes.jpg";
import Stars from "../../assets/icons/5Stars.svg";
import VineristLogo from "../../assets/icons/VineristLogoWhite.svg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <article className="home">
      <section className="home__hero">
        <img className="home__titleheader" src={VineristLogo} />
        <h4 className="home__subheader">
          A Resource for Naramata Wine Lovers <i>by</i> Wine Lovers.
        </h4>
      </section>
      <section className="home__moderators">
        <h3 className="home__header">Meet the Moderators</h3>
        <p className="home__text">
          Experienced in enthusiastically sharing their love of wine since 2010,
          Steven and Sarah Palms are now new vineyard and Bed and Breakfast
          owners in the Naramata Valley. Desiring to add their own contribution
          to the already flourishing community here in the valley, they have
          started <i>The Vinerist</i>. A place and space for all Naramata wine
          lovers to connect, share, and promote all this wonderful region has
          offer.
        </p>
        <img
          className="home__moderatorimg"
          src={Moderator1}
          alt="moderator picture"
        />
        <div className="home__moderatorcontainer">
          <p className="home__name">Steven Palms</p>
          <p className="home__role">Moderator / Writer</p>
        </div>
        <img
          className="home__moderatorimg"
          src={Moderator2}
          alt="moderator picture"
        />
        <div className="home__moderatorcontainer">
          <p className="home__name">Sarah Palms</p>
          <p className="home__role">Moderator / Sommelier</p>
        </div>
      </section>
      <section className="home__content">
        <img className="home__contentimg" src={Winery} alt="winery picture" />
        <h3 className="home__contentheader">
          Uniquely Naramata <i>Wineries</i>
        </h3>
        <p className="home__contenttext">
          Itching to go for a tasting? The Naramata Bench is the birthplace of
          winemaking in British Columbia; known for its top-quality wines that
          regularly win national and international awards. With over 40 wineries
          within a 20 minute drive, you'll find plenty of terroir to swirl, sip
          and savour.
        </p>
        <Link to="/entry" className="link">
          <button className="button_1 home__wineriesbutton">
            Explore Wineries
          </button>
        </Link>
        <span>
          <p className="home__reviewsheader">Featured Reviews</p>
        </span>
        <span className="home__featuredreviews">
          <div className="home__reviews--left">
            <img className="home__reviewimg" src={Glass2} />
            <img className="home__starimg" src={Stars} />
            <p className="home__link">
              <u>Read More</u>
            </p>
          </div>
          <div className="home__reviews--right">
            <p className="home__featuredwine">Chardonnay</p>
            <p className="home__featuredwinery">2017, Poplar Grove</p>
            <p className="home__featuredtext">
              "Salty, briny and beautifully spicy, this wine offers full-bodied
              richness that’s completely in balance and remarkably memorable on
              the palate. Everything is well integrated, from the..."
            </p>
          </div>
        </span>
        <span className="home__featuredreviews2">
          <div className="home__reviews--left">
            <img className="home__reviewimg" src={Grapes} />
            <img className="home__starimg" src={Stars} />
            <p className="home__link">
              <u>Read More</u>
            </p>
          </div>
          <div className="home__reviews--right">
            <p className="home__featuredwine">Syrah</p>
            <p className="home__featuredwinery">2016, Lock &#38; Worth</p>
            <p className="home__featuredtext">
              "The wine’s aroma is not especially pronounced but it is complex;
              dark fruit notes of blackberry and blueberry combine with black
              pepper spice, dried herbs and a delicate floral note. In your
              mouth the wine is dry, full-bodied, velvety and flavorful. The
              flavors are fruity and..."
            </p>
          </div>
        </span>
        <span className="home__vintage">
          <img className="home__vintageimg" src={Glass} />
          <h3 className="home__vintageheader">
            <i>Vintages</i> from A to Z
          </h3>
          <p className="home__vintagetext">
            On the Bench, nearly every style of wine is produced across the
            whole spectrum of sweetness levels that include still, sparkling,
            fortified and dessert wines—most notably ice wines. There are more
            than 60 grape varieties grown including Merlot, Cabernet Sauvignon,
            Pinot noir, Pinot gris, Chardonnay, and Cabernet Franc. In the 21st
            century, growers have been planting more warm climate varieties
            typically not associated with the Canadian wine industry. Recent
            plantings include Sangiovese, Syrah, Tempranillo, and Zinfandel.
          </p>
          <Link to="/entry" className="link">
            <button className="button_1 home__vintagebutton">
              Explore Vintages
            </button>
          </Link>
        </span>
      </section>
    </article>
  );
}

export default Home;
