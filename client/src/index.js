import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.css";
import App from "./App";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/reusable/Header";
import Footer from "./components/reusable/Footer";
import ScrollToTop from "./components/utilities/ScrollToTop";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path={["/login"]} exact>
          <Header addClass="header__fixed" />
        </Route>
        <Route path="*">
          <Header />
        </Route>
      </Switch>
      <App />
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
