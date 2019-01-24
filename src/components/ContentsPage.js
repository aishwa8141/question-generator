import React, { Fragment, Component } from "react";
import {

  Card,
  Container
} from "semantic-ui-react";
import '../css/card.css';
import axios from 'axios';
import Navbar from "./navbar";
import * as content from "./contentData";

export default class Content extends Component {
	constructor(props) {
		super(props);
		this.state= {
			coins: this.props.location.state
		}
		this.randomList = Array();
		while(this.randomList.length <5) {
			var num = Math.floor(Math.random()*20)
			if (this.randomList.indexOf(num) === -1) {
				this.randomList.push(num)
			}
		}
		this.items = this.randomList.map( num => content.list.data[num])
	}

	componentDidMount(){
		// if(this.props.location.state === undefined){
		// 	this.props.history.push('/');
		// }
		// else{
		// 	this.generateStartTelemetry(this.props.location.state);
		// 	if(this.props.location.state.coinsGiven === undefined){
		// 		this.setState({coins: 0})
		// 	}else{
		// 		if(sessionStorage.getItem("coins") == null){
		// 			this.setState({coins: this.props.location.state.coinsGiven})
		// 		}
		// 		else{
		// 			this.setState({coins: sessionStorage.getItem("coins")})
		// 		}
		// 	}
		// }
		console.log(this.state.coins)
	}

	generateInteractTelemetry(visitorInfo) {
		const telemetry = {
				"eid": "INTERACT",
				"ets": (new Date()).getTime(),
				"ver": "3.0",
				"mid": '98912984-c4e9-5ceb-8000-03882a0485e4',
				"actor": {
						"id": visitorInfo.code,
						"type": 'visitor'
				},
				"context": {
						"channel": "devcon.appu",
						"env": 'devcon',
						"cdata": [{
								"visitorId": visitorInfo.code,
								"visitorName": visitorInfo.name,
								"stallId": "STA7",
								"stallName": "BAZAR",
								"ideaId": "IDE21",
								"ideaName": "Crowd Sourcing"
						}
						],
				}
		}
		const event = telemetry;
		console.log('telemetry', telemetry)
		const request = {
				"events": [event]
		};

		axios.post(`http://52.172.188.118:3000/v1/telemetry`, request)
				.then(data => {
						console.log('interact telemetry registered successfully', data);
				}).catch(err => {
						console.log('interact telemetry registration error', err);
				})
}


	gotoContent(index) {
		// this.generateInteractTelemetry(this.props.location.state)
        this.props.history.push({
            pathname:'/contentPage',
			state:{description:index, coins:this.state.coins}
			
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
			<Navbar coins={this.state.coins}/>
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
