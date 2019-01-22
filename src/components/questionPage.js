import React, { Component, Fragment } from "react";
import { Card } from "semantic-ui-react";
import "../css/card.css";
import axios from "axios";
import Navbar from "./navbar";

const contentIndex = [];
export class QuestionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          results: []
        };
      }
      componentDidMount() {
        axios
          .get(`http://localhost:3002/search`)
          .then(res => {
            console.log("searcgj", res);
            this.setState({
              results: res.data
            });
          })
          .catch(err => {
            console.log("Error retreiving Info");
          });
     
        while (contentIndex.length < 5) {
          var r = Math.floor(Math.random() * 5) + 1;
          if (contentIndex.indexOf(r) === -1) contentIndex.push(r);
        }
        console.log(contentIndex);
      }
    gotoContent = () => {
        console.log('content')
        this.props.history.push({
            pathname:'/content'

        });
    }
  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="ui container">
          <div
            className="ui raised very padded text container segment"
            id="align"
          >
            <h2 className="ui centered align grid">Questionnaries</h2>
            {contentIndex.map(index => (
            <Card fluid color="red" id="cardDesign" onClick={this.gotoContent}>
              <Card.Content>
                {/* <div className="ui grid">
                <div className="twelve wide ">*/}
                <Card.Header id="header">{this.state.results[index].name} </Card.Header>

                <div className="meta right floated">{this.state.results[index].questions.length}</div>
              </Card.Content>
            </Card>
            ))
            }
          </div>
        </div>
      </Fragment>
    );
  }
}
