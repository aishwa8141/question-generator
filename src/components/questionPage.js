import React, { Component, Fragment } from "react";
import { Card } from "semantic-ui-react";
import "../css/card.css";
import axios from "axios";
import Navbar from "./navbar";
import { Redirect } from "react-router-dom";
const contentIndex = [];
export class QuestionPage extends Component {
  clicked = false;
  count = 0;
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      isButtonClicked: false
    };
  }
  componentDidMount() {
    axios
      .get(`http://localhost:3002/search`)
      .then(res => {
        console.log("searcgj", res);
        this.setState({
          results: res.data
        });
        console.log("data", this.state.results.length);
      })
      .catch(err => {
        console.log("Error retreiving Info");
      });

    while (contentIndex.length < 5) {
      var r = Math.floor(Math.random() * 5) + 1;
      if (contentIndex.indexOf(r) === -1) contentIndex.push(r);
    }
    console.log(contentIndex);
  }
  gotoContent = id => {
    // event.preventDefault()
    console.log("content", id);
    this.setState({
      isButtonClicked: true
    });
    this.count = this.state.results.length;
    this.clicked = true;
    console.log("content", this.state.isButtonClicked);
    this.props.history.push({
      pathname: "/content",
      state: { description: this.state.results[id] ,Id:id}
    });
  };
  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="ui container">
          <div
            className="ui raised very padded text container segment"
            id="align"
          >
            <h2 className="ui centered align grid">Questionnaries</h2>
            {this.state.results.map((index, id) => (
              <Card
              
                fluid
                color="red"
                id="cardDesign"
                onClick={this.gotoContent.bind(this, id)}
              >
                <Card.Content>
                  {/* <div className="ui grid">
                <div className="twelve wide ">*/}
                  <Card.Header id="header">
                    {index.name}
                    {id}
                  </Card.Header>

                  <div className="meta right floated">
                    {index.question.length}
                  </div>
                </Card.Content>
              </Card>
            ))}
          </div>
        </div>
      </Fragment>
    );
  }
}
