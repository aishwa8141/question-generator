import React, { Component, Fragment } from "react";
import { Card } from "semantic-ui-react";
import '../css/card.css';
export default class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isInEditMode: false,
      value: this.props.questions.title
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
goToBack(event){
  event.preventDefault();
  console.log('back')
  this.setState({
    value:this.props.questions.title,
    isInEditMode:false
  })
}
  render() {
    console.log("dad", this.state.value);
    return (
      <Fragment>
        <div className="ui very padded text container">
          <Card fluid color="red" id="card">
            <Card.Content>
              <div className="ui grid">
                <div className="ten wide column" id="text1">
                  {this.state.isInEditMode === true ? (
                    <div>
                      <input
                      className="ui input"
                        type="text"
                        defaultValue={this.state.value}
                        onChange={this.editText.bind(this)}
                      />
                      <button id="style" className="ui primary button" onClick={this.goToBack.bind(this)}>X</button>
                      <button  className="ui primary button" onClick={this.UpdateQuestion.bind(this)}>
                        Update
                      </button>
                    </div>
                  ) : (
                    <Card.Header>{this.state.value}</Card.Header>
                  )}
                </div>
                <div className="six wide column">
                  <div className="ui labeled icon menu">
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
                      <i className="arrow circle up icon" />
                    </a>
                  </div>
                </div>
              </div>
            </Card.Content>
          </Card>
        </div>
      </Fragment>
    );
  }
}
