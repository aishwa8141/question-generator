import React, {Fragment, Component } from "react";
import {

  Button,
  Divider,
  Grid,
  Header,
  Icon,
  Search,
  Segment
} from "semantic-ui-react";


import Navbar from './navbar'

export default class Home extends Component {

  render() {
    const homeContainer = {
      width : '1000px',
      margin: '60px auto'
    }
    const btnStyle = {
      display:'block',
      margin: 'auto'
    }
    return (
      <Fragment>
        <Navbar></Navbar>
        <Segment placeholder style={homeContainer} padded='very'>
          <Grid columns={2} stackable textAlign="center">
            <Divider vertical>Or</Divider>

            <Grid.Row verticalAlign="middle">
              <Grid.Column>
                <Header icon>
                  <Icon name="search" />
                  Find Content
                </Header>

                <Search placeholder="Search content..." />
                {/* <Button style={btnStyle} primary>Search</Button> */}

              </Grid.Column>

              <Grid.Column>
                <Header icon>
                  <Icon name="content" />
                  Add New Content
                </Header>
                <Button style={btnStyle} primary>Create</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Fragment>
    );
  }
}
