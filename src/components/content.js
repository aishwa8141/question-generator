import React, { Component, Fragment } from "react";
import Cards from "./card";

export default class Content extends Component {
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
        <div className="ui raised very padded text container segment">
          <h2 className="ui header">Dogs Roles with Humans </h2>
          <p>
            Domestic dogs inherited complex behaviors, such as bite inhibition,
            from their wolf ancestors, which would have been pack hunters with
            complex body language. These sophisticated forms of social cognition
            and communication may account for their trainability, playfulness,
            and ability to fit into human households and social situations, and
            these attributes have given dogs a relationship with humans that has
            enabled them to become one of the most successful species on the
            planet today.
          </p>
          <p>
            The dogs' value to early human hunter-gatherers led to them quickly
            becoming ubiquitous across world cultures. Dogs perform many roles
            for people, such as hunting, herding, pulling loads, protection,
            assisting police and military, companionship, and, more recently,
            aiding handicapped individuals. This impact on human society has
            given them the nickname "man's best friend" in the Western world. In
            some cultures, however, dogs are also a source of meat.
          </p>

          <button
            className="ui primary button right floated"
            onClick={this.displayQuestion}
          >
            Generate questions
          </button>
        </div>

        <div>
          {/* <div className="ui centered align grid">
          <h3>Generated Questions<Icon name="question"></Icon></h3>
          </div> */}
          {this.state.questions.map(data => (
            <Cards questions={data.title} />
          ))}
        </div>
      </Fragment>
    );
  }
}
