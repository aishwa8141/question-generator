import React, { Fragment, Component } from "react";
import {
  Header,
  Segment,
  Card,
  Container
} from "semantic-ui-react";
import '../css/card.css';

import Navbar from "./navbar";
import * as content from "./contentData";

export default class Content extends Component {
	constructor() {
		super();
		this.randomList = Array();
		console.log("Length ", this.randomList.length)
		while(this.randomList.length <5) {
			var num = Math.floor(Math.random()*20)
			if (this.randomList.indexOf(num) === -1) {
				this.randomList.push(num)
			}
		}
		console.log("Random number: ", this.randomList);
		this.items = this.randomList.map( num => content.list.data[num])
	}
	gotoContent(index) {
        console.log('content')
        this.props.history.push({
            pathname:'/contentPage', 
            state:{description:index}
        });
        console.log("data", index);
      }
	contentList = () => {
		
		return this.items.map(( item , i)=> 
			<Fragment  key={i}>
				<div className="ui grid">
				<div className="fourteen wide column">
			<Card fluid header={item.name} meta={ item.question.length +" Questions"} description={item.shortDescription} onClick={this.gotoContent.bind(this,item)}	></Card>
			</div>
			<div className="two wide column  centered">
			<Card  meta={ item.question.length +" Questions"} ></Card>
			</div>
			</div>
			</Fragment>
			)
	}

	render() {
		return (
			<div>
			<Navbar/>
			<div id="cardPadding">
				<Container >
      				<div className="ui centered align grid"><h2 id="textStyle">Crowd Sourcing: Questions Curations</h2></div>
      				<Card.Group  >
						{this.contentList()}
					</Card.Group>
      			</Container>
			</div>
			</div>
		)
	}
}