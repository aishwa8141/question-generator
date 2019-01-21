import React, { Component, Fragment } from "react";
import Cards from "./card";
import ReactDOM from 'react-dom';



export default class CreateContent extends Component {
    state = {
        questions: [
           { id: 'fdsd', title: 'Why is the sky blue?' },
           { id: 'adsf', title: 'Who invented pizza?' },
           { id: 'afdsf', title: 'Is green tea overrated?' },
        ]
   }
   
   displayQuestion = () => {
    // this.setState({
    //     displayQuestions: !this.state.displayQuestions
    // })
    ReactDOM.render(<Cards questions={this.state.questions[0]}/>,document.getElementById('ques'));
}

  render() {

    return (
        <Fragment>
      <div className="ui raised very padded text container segment">
        <h2 className="ui header">Dogs Roles with Humans</h2>
        <p>
          Domestic dogs inherited complex behaviors, such as bite inhibition,
          from their wolf ancestors, which would have been pack hunters with
          complex body language. These sophisticated forms of social cognition
          and communication may account for their trainability, playfulness, and
          ability to fit into human households and social situations, and these
          attributes have given dogs a relationship with humans that has enabled
          them to become one of the most successful species on the planet today.
        </p>
        <p>
          The dogs' value to early human hunter-gatherers led to them quickly
          becoming ubiquitous across world cultures. Dogs perform many roles for
          people, such as hunting, herding, pulling loads, protection, assisting
          police and military, companionship, and, more recently, aiding
          handicapped individuals. This impact on human society has given them
          the nickname "man's best friend" in the Western world. In some
          cultures, however, dogs are also a source of meat.
        </p>

        <button className="ui primary button right floated" onClick={this.displayQuestion}>
          Generate questions
        </button>
      </div>

      <div id="ques"></div>
      </Fragment>
    );
  }
}
