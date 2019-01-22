import React, { Component, Fragment } from "react";
import Cards from "./card";
import Navbar from "./navbar";
import "../css/createContent.css";

export default class CreateContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textareaValue: "",
      textareaLength: "",
      storyName: "",
      enablebutton: true,
      questions: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  displayQuestion = () => {
    this.setState({
      questions: [
        { id: "fdsd", title: "Why is the sky blue?" },
        { id: "adsf", title: "Who invented pizza?" },
        { id: "afdsf", title: "Is green tea overrated?" }
      ]
    });
    console.log(this.state.questions);
  };

  handleOnChangeInput(e) {
    e.preventDefault();
    if (e.target.type === "text") {
      console.log("hi");
      this.setState({
        storyName: e.target.value
      });
    } else {
      this.setState({
        textareaValue: e.target.value,
        textareaLength: e.target.value.length
      });
      if (this.state.textareaLength >= 10) {
        this.setState({ enablebutton: false });
      }
    }
  }
  handleSubmit(event) {
    console.log("shajhdk");
    alert("An essay was submitted: " + this.state.storyName);
    event.preventDefault();
  }

  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="ui centered align grid" id="align">
          <h2>Create Content and Generate Questions</h2>
        </div>
        <div
          className="ui raised very padded text container segment"
          id="align"
        >
          <h3 className="ui header">Create story</h3>
          <form className="ui form" onSubmit={this.handleSubmit}>
            <div className="field">
              <input
                type="text"
                placeholder="Story title"
                onChange={this.handleOnChangeInput.bind(this)}
              />
            </div>
            <div className="field">
              <textarea
                onChange={this.handleOnChangeInput.bind(this)}
                placeholder="start writing story...."
              />
            </div>
            <button
              className="ui primary button right floated"
              onClick={this.displayQuestion}
              disabled={this.state.enablebutton}
            >
              Generate questions
            </button>
            <button
              type="submit"
              value="save"
              className="ui primary button right floated "
              disabled={this.state.enablebutton}
            >
              save
            </button>
          </form>
        </div>
        <div>
          <h2>Generated Questions are</h2>
          {this.state.questions.map(data => (
            <Cards questions={data.title} />
          ))}
        </div>
      </Fragment>
    );
  }
}
