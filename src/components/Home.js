import React, { Fragment, Component } from "react";
import {
  Button,
  Divider,
  Grid,
  Header,
  Icon,
  Segment
} from "semantic-ui-react";
import Question from './question';

import Navbar from "./navbar";

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      createContent: false,
      textbox: true,
      showContent: false,
      isButtonClicked: false,
      isClicked: false
    };
  }
  createContent = () => {
    this.setState({
      createContent: true,
      textbox: false,
      isClicked: true
    });
    this.props.history.push({
      pathname: "/content",
      state: { createContent: this.state.createContent }
    });
  };
  gotoSearch = () => {
    this.setState({
      isButtonClicked: true,
      createContent: false
    });
    this.props.history.push({
      pathname: "/search",
      state: { createContent: this.state.createContent }
    });
  };
  render() {
    const homeContainer = {
      width: "1000px",
      margin: "60px auto"
    };
    const btnStyle = {
      display: "block",
      margin: "auto"
    };
    return (
      <Fragment>
        <Navbar />
        <Segment placeholder style={homeContainer} padded="very">
          <Grid columns={2} stackable textAlign="center">
            <Divider vertical>Or</Divider>

            <Grid.Row verticalAlign="middle">
              <Grid.Column>
                <Header icon>
                  <Icon name="search" />
                  Find Content
                </Header>

                {/* <Search placeholder="Search content..." /> */}
                <Button style={btnStyle} primary onClick={this.gotoSearch}>
                  Search
                </Button>
              </Grid.Column>

              <Grid.Column>
                <Header icon>
                  <Icon name="content" />
                  Add New Content
                </Header>
                <Button style={btnStyle} primary onClick={this.createContent}>
                  Create
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Question></Question>
      </Fragment>
    );
  }
}
