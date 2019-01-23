import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import { Redirect } from "react-router-dom";
import "../css/card.css";
export default class TitleCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      para: this.props.content.content.slice(0, 150),
      description: this.props.content
    };
    console.log(props, "sjfj");
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidUpdate() {
    this.setState({});
  }
  handleClick() {
    console.log("thissa", this.state.description);
    this.setState({
      isClicked: true
    });
  }

  render() {
    return (
      <Card fluid id="card" onClick={this.handleClick.bind(this)}>
        <Card.Content>
          <Card.Header id="header">
            {this.props.num}.&nbsp;&nbsp;&nbsp;{this.props.content.name}{" "}
          </Card.Header>
          <br />
          <p>
            {" "}
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {this.state.para}
            .&nbsp;.&nbsp;.&nbsp;.&nbsp;
          </p>
          <div className="meta right floated">
            {this.props.content.question.length}(ques)
          </div>
          {this.state.isClicked ? (
            <Redirect
              to={{
                pathname: "/content",
                state: { description: this.state.description }
              }}
            />
          ) : null}
        </Card.Content>
      </Card>
    );
  }
}
