import React, { Fragment, Component } from "react";
import {

  Card,
  Container
} from "semantic-ui-react";
import '../css/card.css';

import Navbar from "./navbar";
import * as content from "./contentData";

export default class Content extends Component {
	constructor(props) {
		super(props);
		
		this.randomList = Array();
		while(this.randomList.length <5) {
			var num = Math.floor(Math.random()*20)
			if (this.randomList.indexOf(num) === -1) {
				this.randomList.push(num)
			}
		}
		this.items = this.randomList.map( num => content.list.data[num])
	}
	gotoContent(index) {
        this.props.history.push({
            pathname:'/contentPage', 
            state:{description:index}
        });
      }
	contentList = () => {
		
		return this.items.map( (item,i) => 
		<Fragment  key={i}>
			
			<a className="ui orange right ribbon label align centered">{ item.question.length}&nbsp;Questions</a>
			<Card key={i}fluid header={item.name}  description={item.shortDescription} onClick={this.gotoContent.bind(this,item)}	></Card>
			
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