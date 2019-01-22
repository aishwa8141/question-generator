import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Search from "../components/search";
import Login from "../components/Login";
import Card from "../components/card";
import Home from "../components/Home";
import CreateContent from "../components/createContent";
class AppRouter extends React.Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Login} exact={true} />
            <Route path="/home" component={Home} />
            <Route path="/cards" component={Card} />
            <Route path="/search" component={Search} />
            <Route path="/content" component={CreateContent} />
          </Switch>
        </BrowserRouter>
      </Fragment>
    );
  }
}
export default AppRouter;
