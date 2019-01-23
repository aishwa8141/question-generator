import React, { Component, Fragment } from "react";
import "../css/card.css";
import axios from "axios";
import Navbar from "./navbar";
import TitleCards from './titleCard';
var num=1;
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
          .get(`http://localhost:3002/data`)
          .then(res => {
            console.log("searcgj", res.data.search);
            this.setState({
              results: res.data.search
            });
          })
          .catch(err => {
            console.log("Error retreiving Info");
          });
     
        while (contentIndex.length < 5) {
          var r = Math.floor(Math.random() * 11) + 1;
          if (contentIndex.indexOf(r) === -1) contentIndex.push(r);
        }
        console.log(contentIndex);
      }
    gotoContent = (index) => {
        console.log('content')
        this.props.history.push({
            pathname:'/content', 

        });
    }
  render() {
    return (
      <Fragment>
        <Navbar />
        {/* <div className="ui container"> */}
          <div
            className="ui raised very padded container segment"
            id="align"
          >
            <h2 className="ui centered align grid">Questionnaries</h2>
            {contentIndex.map((index , i) => (
         
            <TitleCards key={i} content={this.state.results[index]} num={num++}></TitleCards>
            
            ))
            }
          </div>
        {/* </div> */}
      </Fragment>
    );
  }
}   
