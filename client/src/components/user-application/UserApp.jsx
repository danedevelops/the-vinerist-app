import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { getUser } from "../utilities/AxiosCalls";
import { Loading } from "../reusable/Loading";
import { Link } from "react-router-dom";

export default function UserApp() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser(sessionStorage.getItem("userLoggedIn")).then((res) => {
      if (res.status === 200) {
        setUser(res.data);
      } else {
        setUser(false);
      }
    });
  }, []);

  return user === null ? (
    <Loading />
  ) : user === false || !sessionStorage.getItem("userLoggedIn") ? (
    <Redirect to="/" />
  ) : (
    <article className="vintages">
      <section className="vintages__hero">
        <div className="default__options2">
          <h5 className="default__h5"> Welcome, </h5>
          <h5 className="default__h5"> {user.first_name}</h5>
          <Link to="/vintages" className="link button__5">
            Vintages
          </Link>
          <Link to="/wineries" className="link button__5">
            Wineries
          </Link>
        </div>
      </section>
    </article>
  );
}
