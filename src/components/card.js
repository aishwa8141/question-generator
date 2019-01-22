import React, { Component, Fragment } from "react";
import { TextArea,Card } from "semantic-ui-react";
import "../css/card.css";
import { Form } from "semantic-ui-react";
export default class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isInEditMode: false,
      value: this.props.questions
    };
  }

  changeEditMode(event) {
    event.preventDefault();
    this.setState({
      isInEditMode: !this.state.isInEditMode
    });
    console.log("mpode", this.state.isInEditMode);
    // this.renderEditView();
  }
  UpdateQuestion(event) {
    event.preventDefault();
    this.setState({
      isInEditMode: false
    });
  }
  editText(event) {
    event.preventDefault();
    this.setState({
      value: event.target.value
    });
  }
  goToBack(event) {
    event.preventDefault();
    console.log("back");
    this.setState({
      value: this.props.questions,
      isInEditMode: false
    });
  }
  render() {
    console.log("dad", this.state.value, "the", this.props.questions);
    return (
      <Fragment>
        <div className="ui very padded text container">
          <Card fluid color="red" id="card">
            <Card.Content>
              {this.state.isInEditMode === true ? (
                <div>
                  {/* <input
                   className="ui input"
                   type="text"
                   id="text1"
                   defaultValue={this.props.value.title}
                   onChange={this.editText.bind(this)}
                 /> */}
                  <Form>
                    <TextArea
                      rows={2}
                      defaultValue={this.props.value.title}
                      onChange={this.editText.bind(this)}
                      type="text"
                    />
                  </Form>
                  <button
                    id="style"
                    className="ui primary button"
                    onClick={this.goToBack.bind(this)}
                  >
                    Cancel
                  </button>
                  <button
                    className="ui primary button"
                    onClick={this.UpdateQuestion.bind(this)}
                  >
                    Update
                  </button>
                </div>
              ) : (
                <Fragment>
                  <div className="ui grid">
                    <div className="ten wide column" id="text1">
                      <Card.Header>
                        {this.state.update === true
                          ? this.state.value
                          : this.props.questions}
                      </Card.Header>
                    </div>

                    <div className="six wide column">
                      <div className="ui icon menu">
                        <a
                          className="item"
                          href="/"
                          data-tooltip="delete"
                          data-position="bottom left"
                        >
                          <i className="trash icon" />
                        </a>
                        <a
                          className="item"
                          href="/"
                          data-tooltip="edit"
                          data-position="bottom left"
                          onClick={this.changeEditMode.bind(this)}
                        >
                          <i className="edit icon" />
                        </a>
                        <a
                          className="item"
                          href="/"
                          data-tooltip="publish"
                          data-position="bottom left"
                        >
                          <i className="send icon" />
                        </a>
                      </div>
                    </div>
                  </div>
                </Fragment>
              )}
            </Card.Content>
          </Card>
        </div>
      </Fragment>
    );
  }
}
