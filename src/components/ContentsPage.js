import React, { Fragment, Component } from "react";
import {
  Header,
  Segment,
  Card,
  Container
} from "semantic-ui-react";

import Navbar from "./navbar";
import * as content from "./contentData";

export default class Content extends Component {
	constructor() {
		super();
		this.randomList = Array();
		console.log("Length ", this.randomList.length)
		while(this.randomList.length <5) {
			var num = Math.floor(Math.random()*20)
			if (this.randomList.indexOf(num) == -1) {
				this.randomList.push(num)
			}
		}
		console.log("Random number: ", this.randomList);
		this.items = this.randomList.map( num => content.list.data[num])
	}

	contentList = () => {
		return this.items.map( item => 
			<Card fluid header={item.name} meta={ item.question.length +" Questions"} description={item.shortDescription}></Card>
		)
	}

	render() {
		return (
			<div>
			<Navbar/>
			<Segment>
				<Container fluid>
      				<Header as='h2'>Crowd Sourcing: Questions Curations</Header>
      				<Card.Group>
						{this.contentList()}
					</Card.Group>
      			</Container>
			</Segment>
			</div>
		)
	}
}