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
      count: this.creditCount
    };
  }
  componentDidMount() {
    axios.get("http://localhost:3002/users").then(res => {
      this.creditCount = res.data[0].credit;
    });
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
        background: "grey",
        width: "400px",
        borderRadius: "10px",
        opacity: "0.05",
        marginTop: '4rem'
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
      isInEditMode: false
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
    axios
      .put(`http://localhost:3002/users/${newCredit.id}`, newCredit)
      .then(res => {
      });

    toast.info("Successfully published!", {
      autoClose: true,
      position: toast.POSITION.TOP_CENTER,
      className: css({
        background: "#6A9377",
        width: "400px",
        height: "10px",
        borderRadius: "10px",
        opacity: "0.05",
        border: "none",
        marginTop: '4rem'
      })
    });
  };
  delete = () => {
    this.setState({
      value: this.emptyValue
    });
    toast.info("Successfully deleted!", {
      position: toast.POSITION.TOP_CENTER,
      className: css({
        background: "#AF7E7E",
        width: "400px",
        borderRadius: "10px",
        opacity: "0.05",
        marginTop: '4rem'
      }),
      bodyClassName: css({})
    });
  };
  render() {
    return (
      <Fragment>
        <div className="ui very padded text container">
          <ToastContainer autoClose={2000} />
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
                        <span>{this.props.num}</span>.&nbsp; &nbsp; &nbsp;
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
                            // href="/"
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
