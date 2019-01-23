import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../components/Login";
import Content from "../components/content";
import ContentsPage from "../components/ContentsPage";
// import { QuestionPage } from "../components/questionPage";
class AppRouter extends React.Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Login} exact={true} />
            <Route path="/contentPage" component={Content} />
            <Route path="/contentList" component={ContentsPage} />
          </Switch>
        </BrowserRouter>
      </Fragment>
    );
  }
}
export default AppRouter;
