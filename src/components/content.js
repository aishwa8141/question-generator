import React, { Component, Fragment } from "react";
import Cards from "./card";
import Navbar from "./navbar";
import "../css/createContent.css";
import { Button } from "semantic-ui-react";

export default class Content extends Component {
  number = 1;
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      num: this.number,
      descript: this.props.location.state.description,
      expanded: false
    };
  }
  componentDidMount() {
    this.displayQuestion();
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
        <Navbar />
        <div className="ui centered align grid" id="align" />
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
              <Cards key={i} questions={data.question} num={this.number++} />
            ))}
          </div>
        </div>
      </Fragment>
    );
  }
}
