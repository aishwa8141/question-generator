import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../components/Login";
import Content from "../components/content";
import ContentsPage from "../components/ContentsPage";
class AppRouter extends React.Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Login} exact={true} />
            <Route path="/contentPage" component={Content} exact={true}/>
            <Route path="/contentList" component={ContentsPage} exact={true}/>
          </Switch>
        </BrowserRouter>
      </Fragment>
    );
  }
}
export default AppRouter;
