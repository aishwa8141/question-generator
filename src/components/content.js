import React, { Component, Fragment } from "react";
import Cards from "./card";
import Navbar from "./navbar";
import '../css/createContent.css';  
export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textareaValue: "",
      textareaLength: "",
      storyName: "",
      enablebutton: true,
      questions: [],
      id:this.props.location.state.Id
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    // console.log("called")
  }
  componentDidMount(){
    console.log("called",this.props.location.state.description.name);
    console.log("called 2",this.props.location.state.Id)

  }
  // displayQuestion = () => {
  //   this.setState({
  //     questions: [
  //       { id: "fdsd", title: "Why is the sky blue?" },
  //       { id: "adsf", title: "Who invented pizza?" },
  //       { id: "afdsf", title: "Is green tea overrated?" }
  //     ]
  //   });
  //   console.log(this.state.questions);
  // };
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
  handleSubmit(e) {
    e.preventDefault();
    console.log("shajhdk");
    alert("An essay was submitted: " + this.state.storyName);
    e.preventDefault();
  }

  render() {
    return (
      <Fragment >
        <Navbar/>
        <div className="ui centered align grid" id="align">
          <h2>Generated Contents and Questions </h2>
        </div>
        <div className="ui raised very padded text container segment" id="align">
          <h2 className="ui header">{this.props.location.state.description.name}</h2>
          <p>
            {this.props.location.state.description.content}
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
          {this.props.location.state.description.question.map(data => (
            <Cards questions={data.question} />
          ))}
        </div>
      </Fragment>
    );
  }
}
