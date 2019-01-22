import React, { Component, Fragment } from "react";
import { TextArea, Grid,  Card, Menu, Icon } from "semantic-ui-react";
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
                       <TextArea placeholder='Tell us more' defaultValue={this.state.value} onChange={this.editText.bind(this)} />
                      <button id="style" className="ui primary button" onClick={this.goToBack.bind(this)}>X</button>
                      <button  className="ui primary button" onClick={this.UpdateQuestion.bind(this)}>
                        Update
                      </button>
                    </div>
                  ) : (
                    <Card.Header>{this.state.value}</Card.Header>
                  )}
                </div>

                <Grid columns={6} stackable>
                <Menu compact>
                <Menu.Item name='gamepad'>
                    <Icon name='trash' />
                  </Menu.Item>
                  <Menu.Item
                    name='video camera'
                    onClick={this.changeEditMode.bind(this)}
                  >
                    <Icon name='edit' />
                  </Menu.Item>

                  <Menu.Item
                    name='video play'>
                    <Icon name='send' />
                  </Menu.Item>
                </Menu>
                </Grid>

              </div>
            </Card.Content>
          </Card>
        </div>
      </Fragment>
    );
  }
}
