import React, { Component, Fragment } from "react";
import Cards from "./card";
import ReactDOM from "react-dom";

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textareaValue: "",
      textareaLength: "",
      enablebutton: true,
      questions: [
        { id: "fdsd", title: "Why is the sky blue?" },
        { id: "adsf", title: "Who invented pizza?" },
        { id: "afdsf", title: "Is green tea overrated?" }
      ]
    };
  }

  displayQuestion  () {
  
  };

  handleOnChangeInput(e) {
    e.preventDefault();
    this.setState({
      textareaValue: e.target.value,
      textareaLength: e.target.value.length
    });
    if (this.state.textareaLength >= 10) {
      this.setState({ enablebutton: false });
    }
  }

  render() {
    if (this.props.createContent) {
      return (
        <Fragment>
          <div className="ui raised very padded text container segment">
            <h3 className="ui header">Create story</h3>
            <div className="ui form">
          <div className="field">
              <input type="text" placeholder="Story title"/>
              </div>
              <div className="field">
                <textarea onChange={this.handleOnChangeInput.bind(this)} placeholder="start writing story...." />
              </div>
            </div>
            <button
              className="ui primary button right floated"
              onClick={this.displayQuestion}
              disabled={this.state.enablebutton}
            >
              Generate questions
            </button>
            <button
              className="ui primary button right floated "
              disabled={this.state.enablebutton}
            >
              save
            </button>
           
          </div>

          <div id="ques" />
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <div className="ui raised very padded text container segment">
            <h2 className="ui header">Dogs Roles with Humans </h2>
            <p>
              Domestic dogs inherited complex behaviors, such as bite
              inhibition, from their wolf ancestors, which would have been pack
              hunters with complex body language. These sophisticated forms of
              social cognition and communication may account for their
              trainability, playfulness, and ability to fit into human
              households and social situations, and these attributes have given
              dogs a relationship with humans that has enabled them to become
              one of the most successful species on the planet today.
            </p>
            <p>
              The dogs' value to early human hunter-gatherers led to them
              quickly becoming ubiquitous across world cultures. Dogs perform
              many roles for people, such as hunting, herding, pulling loads,
              protection, assisting police and military, companionship, and,
              more recently, aiding handicapped individuals. This impact on
              human society has given them the nickname "man's best friend" in
              the Western world. In some cultures, however, dogs are also a
              source of meat.
            </p>

            <button
              className="ui primary button right floated"
              onClick={this.displayQuestion}
            >
              Generate questions
            </button>
          </div>

          <div id="ques" />
        </Fragment>
      );
    }
  }
}
