import React, { Component, Fragment } from "react";
import Cards from "./card";
import Navbar from "./navbar";
import "../css/createContent.css";
var num = 1;
export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      descript: this.props.location.state.description
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

  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="ui centered align grid" id="align">
          {/* <h2>Generated Contents and Questions </h2> */}
        </div>
        <div
          className="ui raised very padded text container segment "
          id="para"
        >
          <h2 className="ui header centered align">{this.state.descript.name}</h2>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.state.descript.content}</p>
          {/* <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.state.descript.content}</p> */}
        </div>

        <div>
          <div id="ques">
            {this.state.questions.map((data ,i)=> (
              
              <Cards key={i} questions={data.question} num={num++} />
            ))}
          </div>
        </div>
      </Fragment>
    );
  }
}
