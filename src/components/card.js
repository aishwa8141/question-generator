import React, { Component, Fragment } from "react";
import { TextArea, Card } from "semantic-ui-react";
import "../css/card.css";
import { Form } from "semantic-ui-react";
import axios from "axios";
export default class Cards extends Component {
   creditCount = 0;
  constructor(props) {
    super(props);
    this.state = {
      isInEditMode: false,
      value: this.props.questions,
      isupdated: false,
      count:this.creditCount
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
      isInEditMode: false,
      update: true
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
  addCredits = (event) => {
    event.preventDefault();
    console.log("in credits",this.creditCount);
    this.creditCount++;
    this.setState({
      isupdated: true,
      count:this.creditCount
    });
    const newCredit={
      
      userName:"aish",
      coins:this.creditCount
    }
    console.log('count')
    axios.patch(`http://localhost:3002/users/1`,newCredit)
          .then(res => {
            console.log("credit",res);
          });
  };
  render() {
    console.log("dad", this.state.value, "the", this.props.questions);
    return (
      <Fragment>
        <div className="ui very padded text container">
          <Card fluid  id="card">
            <Card.Content>
              {this.state.isInEditMode === true ? (
                <div>
                  <Form>
                    <TextArea
                      rows={2}
                      defaultValue={this.state.value}
                      onChange={this.editText.bind(this)}
                      type="text"
                    />
                  </Form>
                  <button
                    id="style"
                    className="ui warning button right floated"
                    onClick={this.goToBack.bind(this)}
                  >
                    Cancel
                  </button>
                  <button
                    className="ui primary button right floated"
                    onClick={this.UpdateQuestion.bind(this)}
                  >
                    Update
                  </button>
                </div>
              ) : (
                <Fragment>
                  <div className="ui grid">
                    <div className="ten wide column" id="text1">
                      <Card.Header><span>{this.props.num}</span>.&nbsp; &nbsp; &nbsp;
                        {this.state.update === true
                          ? this.state.value
                          : this.props.questions}
                      </Card.Header>
                    </div>
                    <div className="six wide column" id="text2">
                      <div className="ui icon menu right floated" id="childIcons">
                        {this.state.isupdated ? (
                          <a
                            id="iconSize"
                            className="item"
                            href="/"
                            data-tooltip="It's published"
                            data-position="bottom left"
                          >
                            <i className="trash icon disabled" />{" "}
                          </a>
                        ) : (
                          <a
                            id="iconSize"
                            className="item"
                            href="/"
                            data-tooltip="delete"
                            data-position="bottom left"
                          >
                            <i className="trash icon" />{" "}
                          </a>
                        )}
                        {this.state.isupdated ? (
                          <a
                            id="iconSize"
                            className="item"
                            href="/"
                            data-tooltip="It's published"
                            data-position="bottom left"
                          >
                            <i className="edit icon disabled" />{" "}
                          </a>
                        ) : (
                          <a
                            id="iconSize"
                            className="item"
                             href="/"
                            data-tooltip="edit"
                            data-position="bottom left"
                            onClick={this.changeEditMode.bind(this)}
                          >
                            {" "}
                            <i className="edit icon" />{" "}
                          </a>
                        )}
                        {this.state.isupdated ? (
                          <a
                            className="item"
                            href="/content"
                            id="iconSize"
                            data-tooltip="It's published"
                            data-position="bottom left"
                          >
                            <i className="send icon disabled" />{" "}
                          </a>
                        ) : (
                          <a
                            className="item"
                            id="iconSize"
                            href="/"
                            data-tooltip="publish"
                            data-position="bottom left"
                            onClick={this.addCredits}
                          >
                            {" "}
                            <i className="send icon" />{" "}
                          </a>
                        )}
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