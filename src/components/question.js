import React, { Component, Fragment } from "react";
import { Card } from "semantic-ui-react";
import Cards from "./card";
import axios from "axios";

const arr = [];

export default class Question extends Component {
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

    while (arr.length < 5) {
      var r = Math.floor(Math.random() * 5) + 1;
      if (arr.indexOf(r) === -1) arr.push(r);
    }
    console.log(arr);
  }

  render() {
    return (
      <Fragment>
        {arr.map(data => (
          <Cards questions={this.state.results[data].name} />
        ))}
      </Fragment>
    );
  }
}
