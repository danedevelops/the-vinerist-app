import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/static/Home";
import Vintages from "./components/vintages/Vintages";
import Wineries from "./components/wineries/Wineries";
import AddVintage from "./components/vintages/AddVintage";
import AddWinery from "./components/wineries/AddWinery";
import VintageById from "./components/vintages/VintageById";
import WineryById from "./components/wineries/WineryById";
import AddReview from "./components/reviews/AddReview";
import PageNotFound from "./components/static/PageNotFound";
import UserApp from "./components/user-application/UserApp";
import DefaultOptions from "./components/login-workflow/DefaultOptions";
import Login from "./components/login-workflow/Login";
import Registration from "./components/login-workflow/Registration";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/vintages" exact component={Vintages} />
      <Route path="/wineries" exact component={Wineries} />
      <Route path="/vintages/add" exact component={AddVintage} />
      <Route path="/wineries/add" exact component={AddWinery} />
      <Route
        path="/vintages/:id"
        exact
        render={(routerProps) => {
          return <VintageById routerProps={routerProps} />;
        }}
      />
      <Route
        path="/wineries/:id"
        exact
        render={(routerProps) => {
          return <WineryById routerProps={routerProps} />;
        }}
      />
      <Route
        path="/reviews/add/:id"
        exact
        render={(routerProps) => {
          return <AddReview routerProps={routerProps} />;
        }}
      />
      <Route path="/users" render={() => <UserApp />} />
      <Route path="/register" render={() => <Registration />} />
      <Route path="/login" render={() => <Login />} />
      <Route path="/entry" render={() => <DefaultOptions />} exact />
      <Route path="/*" exact component={PageNotFound} />
    </Switch>
  );
}

export default App;
