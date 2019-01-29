import React, { Component, Fragment } from "react";
import { TextArea, Card } from "semantic-ui-react";
import "../css/card.css";
import { Form } from "semantic-ui-react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { css } from "glamor";
var creditCount=0;
export default class Cards extends Component {
  
  emptyValue = "";
  constructor(props) {
    super(props);
    this.state = {
      isInEditMode: false,
      value: this.props.questions,
      isupdated: false,
      count: creditCount,
      coins:parseInt(this.props.coins),
      delete: false,
      quesNumber: this.props.num
    };
    console.log('p',this.props.coins)
  }
  changeEditMode(event) {
    event.preventDefault();
    this.setState({
      isInEditMode: !this.state.isInEditMode
    });
  }
  UpdateQuestion(event) {
    creditCount++;
    const val=creditCount+(this.state.coins);
    sessionStorage.setItem("coins",val)
    event.preventDefault();
    this.setState({
      isInEditMode: false,
      update: true,
      count:creditCount,
      coins:val
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
    const request= {
      id: "open-saber.registry.update",
      ver: "1.0",
      ets: "11234",
      params: {
        did: "",
        key: "",
        msgid: ""
      },
      request: {
        Visitor: {
          code: this.props.userId,
          coinsGiven: val
        }
      }
    }
    axios.post('http://104.211.78.0:8080/update',request)
    .then(res=>{
      console.log('res',res,val);
      this.props.updateCoins(this.state.coins);
    })

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
    creditCount++;
    const val=creditCount+(this.state.coins);
    sessionStorage.setItem("coins",val)
    this.setState({
      isupdated: true,
      count: this.creditCount,
      coins:val
    });    
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
    console.log('userId',this.props.userId)
   const request= {
      id: "open-saber.registry.update",
      ver: "1.0",
      ets: "11234",
      params: {
        did: "",
        key: "",
        msgid: ""
      },
      request: {
        Visitor: {
          code: this.props.userId,
          coinsGiven: val
        }
      }
    }
    axios.post('http://104.211.78.0:8080/update',request)
    .then(res=>{
      console.log('res',res,val);
      this.props.updateCoins(this.state.coins);
  })
  };
  delete = () => {
    creditCount++;
    const val=creditCount+(this.state.coins);
    sessionStorage.setItem("coins",val)
    this.setState({
      value: this.emptyValue,
      update: !this.state.update,
      delete: !this.state.delete,
      quesNumber: this.props.num,
      count:this.creditCount,
      coins:val
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
    const request= {
      id: "open-saber.registry.update",
      ver: "1.0",
      ets: "11234",
      params: {
        did: "",
        key: "",
        msgid: ""
      },
      request: {
        Visitor: {
          code: this.props.userId,
          coinsGiven: val
        }
      }
    }
    axios.post('http://104.211.78.0:8080/update',request)
    .then(res=>{
      console.log('res',res);
      this.props.updateCoins(this.state.coins);

    })

    console.log('cd',this.state.count)
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
                            <i
                              id="iconSize"
                              className="item"
                              data-tooltip="It's published"
                              data-position="bottom left"
                            >
                              <i className="trash icon disabled" />{" "}
                            </i>
                          ) : (
                            <i
                              id="iconSize"
                              className="item"
                              data-tooltip="delete"
                              data-position="bottom left"
                              onClick={this.delete}
                            >
                              <i className="trash icon" />{" "}
                            </i>
                          )}
                          {this.state.isupdated ? (
                            <i
                              id="iconSize"
                              className="item"
                              data-tooltip="It's published"
                              data-position="bottom left"
                            >
                              <i className="edit icon disabled" />{" "}
                            </i>
                          ) : (
                            <i
                              id="iconSize"
                              className="item"
                              data-tooltip="edit"
                              data-position="bottom left"
                              onClick={this.changeEditMode.bind(this)}
                            >
                              {" "}
                              <i className="edit icon" />{" "}
                            </i>
                          )}
                          {this.state.isupdated ? (
                            <i
                              className="item"
                              id="iconSize"
                              data-tooltip="It's published"
                              data-position="bottom left"
                            >
                              <i className="send icon disabled" />{" "}
                            </i>
                          ) : (
                            <i
                              className="item"
                              id="iconSize"
                              data-tooltip="publish"
                              data-position="bottom left"
                              onClick={this.addCredits}
                            >
                              {" "}
                              <i className="send icon" />{" "}
                            </i>
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
