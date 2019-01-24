import React, { Component, Fragment } from "react";
import { TextArea, Card } from "semantic-ui-react";
import "../css/card.css";
import { Form } from "semantic-ui-react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { css } from "glamor";

export default class Cards extends Component {
  creditCount = 0;
  emptyValue = "";
  constructor(props) {
    super(props);
    this.state = {
      isInEditMode: false,
      value: this.props.questions,
      isupdated: false,
      count: this.creditCount,
      delete: false,
      quesNumber: this.props.num
    };
  }
  componentDidMount() {
    // axios.get("http://localhost:3002/users").then(res => {
    //   this.creditCount = res.data[0].credit;
    // });
  }
  changeEditMode(event) {
    event.preventDefault();
    this.setState({
      isInEditMode: !this.state.isInEditMode
    });
  }
  UpdateQuestion(event) {
    event.preventDefault();
    this.setState({
      isInEditMode: false,
      update: true
    });
    toast.info("Successfully edited!", {
      position: toast.POSITION.TOP_CENTER,
      className: css({
        background: "orange",
        width: "400px",
        borderRadius: "10px",
        opacity: "0.2"
      }),
      bodyClassName: css({})
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
    this.setState({
      value: this.props.questions,
      isInEditMode: true
    });
  }
  addCredits = event => {
    event.preventDefault();

    this.creditCount++;
    this.setState({
      isupdated: true,
      count: this.creditCount
    });
    const newCredit = {
      id: 1,
      name: "aishwarya",
      credit: this.creditCount
    };
    // axios.put(`http://localhost:3002/users/${newCredit.id}`,newCredit)
    //       .then(res => {
    //         console.log("credit",res);
    //       });
    toast.info("Successfully published!", {
      position: toast.POSITION.TOP_CENTER,
      className: css({
        background: "green",
        width: "400px",
        borderRadius: "10px",
        opacity: "0.2"
      }),
      bodyClassName: css({})
    });
  };
  delete = () => {
    this.setState({
      value: this.emptyValue,
      update: !this.state.update,
      delete: !this.state.delete,
      quesNumber: this.props.num
    });
    toast.info("Successfully deleted!", {
      position: toast.POSITION.TOP_CENTER,
      className: css({
        background: "red",
        width: "400px",
        borderRadius: "10px",
        opacity: "0.1"
      }),
      bodyClassName: css({})
    });
    console.log("delete", this.state.value);
  };
  render() {
    return (
      <Fragment>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={true}
          rtl={false}
          pauseOnVisibilityChange
        />{" "}
        {this.state.delete === true ? (
          ""
        ) : (
          <div className="ui very padded text container">
            <Card fluid id="card">
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
                      id="style"
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
                        <Card.Header>
                          {this.state.update === true
                            ? this.state.value
                            : this.props.questions}
                        </Card.Header>
                      </div>
                      <div className="six wide column" id="text2">
                        <div
                          className="ui icon menu right floated"
                          id="childIcons"
                        >
                          {this.state.isupdated ? (
                            <a
                              id="iconSize"
                              className="item"
                              // href="/"
                              data-tooltip="It's published"
                              data-position="bottom left"
                            >
                              <i className="trash icon disabled" />{" "}
                            </a>
                          ) : (
                            <a
                              id="iconSize"
                              className="item"
                              // href="/contentPage"
                              data-tooltip="delete"
                              data-position="bottom left"
                              onClick={this.delete}
                            >
                              <i className="trash icon" />{" "}
                            </a>
                          )}
                          {this.state.isupdated ? (
                            <a
                              id="iconSize"
                              className="item"
                              // href="/"
                              data-tooltip="It's published"
                              data-position="bottom left"
                            >
                              <i className="edit icon disabled" />{" "}
                            </a>
                          ) : (
                            <a
                              id="iconSize"
                              className="item"
                              //  href="/contentPage"
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
                              // href="/content"
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
                              // href="/contentPage"
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
        )}
      </Fragment>
    );
  }
}
