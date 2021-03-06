import React, { Component, Fragment } from "react";
import Cards from "./card";
import Navbar from "./navbar";
import "../css/createContent.css";
import {  Button } from "semantic-ui-react";

export default class Content extends Component {
number = 1;
constructor(props) {
  super(props);
  this.state = {
    questions: [],
    num :this.number,
    descript: this.props.location.state.description,
    expanded: false,
    coins: this.props.location.state.coins,
    visitorId:this.props.location.state.userId
     };
}
componentDidMount() {
  console.log(this.state.coins);
  this.displayQuestion();
  

}
updateCoins(coins){
  this.setState({
    coins:coins
  })
  console.log('Changed COins', this.state.coins);
}
displayQuestion = () => {
  this.setState({
    questions: this.state.descript.question
  });
};
showButton = () => {
  this.setState({ expanded: !this.state.expanded });
};
render() {
  return (
    <Fragment>
      <Navbar coins={this.state.coins} ></Navbar>
      <div className="ui centered align grid" id="align">
        {/* <h2>Generated Contents and Questions </h2> */}
      </div>
      <div
        className="ui raised very padded text container segment "
        id="para"
      >
        <h2 className="ui header centered align">
          {this.state.descript.name}
        </h2>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {this.state.descript.content.slice(0, 308)}
          {this.state.expanded === true ? (
            <span>{this.state.descript.content.slice(308)}</span>
          ) : (
            ""
          )}
        </p>

        <Button className="right floated primary" onClick={this.showButton}>
          {this.state.expanded === true ? "view less" : "View More"}
        </Button>
      </div>

      <div>
        <div id="ques">
          {this.state.questions.map((data, i) => (
            <Cards key={i} questions={data.question} coins={sessionStorage.getItem("coins")} num={this.number++} updateCoins={this.updateCoins.bind(this)} userId= {this.state.visitorId}/>
          ))}
        </div>
      </div>
    </Fragment>
  );
}
}