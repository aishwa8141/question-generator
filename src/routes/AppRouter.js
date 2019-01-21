import React , { Fragment}from "react";
import {BrowserRouter , Route,Switch } from  "react-router-dom";
import {questionPage} from '../components/questionPage';
import App from '../App';
import Login from '../components/Login'
import Card from '../components/card'
class AppRouter extends React.Component {

    render() {
        return(
            <Fragment>
                <BrowserRouter>
                <Switch>
                    <Route path = "/" component= {Login} exact={true}/>
                    <Route path = "/home" component = {questionPage}  />
                    <Route path = "/cards" component= {Card} />
                </Switch>
                </BrowserRouter>
            </Fragment>
        )
    }
}
export default AppRouter;
