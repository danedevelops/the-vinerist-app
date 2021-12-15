import { Link } from "react-router-dom";

function DefaultOptions() {
  return (
    <article className="vintages">
      <section className="vintages__hero">
        <div className="default__options">
          <h5 className="default__h5">To Continue Exploring...</h5>
          <Link to="/login" className="link button__5">
            Log In
          </Link>
          <Link to="/register" className="link button__5">
            Register
          </Link>
        </div>
      </section>
    </article>
  );
}

export default DefaultOptions;
