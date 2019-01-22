import React, { Component, Fragment } from "react";
import Autosuggest from "react-autosuggest";
import "../css/search.css";
import axios from "axios";
import Content from "./content";
import ReactDOM from "react-dom";

import * as searchData from "./searchData";
import Navbar from "./navbar";

const getSuggestionValue = suggestion => suggestion.name;

function renderSuggestion(suggestion) {
  return <span>{suggestion.name}</span>;
}
const renderInputComponent = inputProps => (
  <div className="ui fluid icon input">
    <input
      type="text"
      placeholder="Search a very wide input..."
      {...inputProps}
    />
    <i className="search icon" />
  </div>
);

export default class Search extends Component {
  constructor() {
    super();

    this.state = {
      searchValue: "",
      value: "",
      suggestions: [],
      searchResults: "",
      results: "",
      createContent: false,
      textbox: true,
      showContent: false
    };
  }
  componentDidMount() {
    // axios
    //   .get(`${API_URL}`)
    //   .then(res => {
    //     console.log(res.data);
    //     this.setState({
    //       results: res.data
    //     });
    //   })
    //   .catch(err => {
    //     console.log("Error retreiving Info");
    //   });

    this.setState({
      results: searchData.default.data.search
    });
  }
  searchByName = () => {
    console.log("searching");
    axios
      .get(`http://localhost:3001/${this.state.searchValue}`)
      .then(res => {
        console.log("searcgj", res);
        this.setState({
          searchResults: res.data.search
        });
      })
      .catch(err => {
        console.log("Error retreiving Info");
      });
  };
  getSuggestions(value) {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    console.log(this.state.results);
    return inputLength === 0
      ? []
      : this.state.results.filter(
          lang => lang.name.toLowerCase().slice(0, inputLength) === inputValue
        );
  }
  onChange = (event, { newValue }) => {
    console.log("omsj", newValue);
    this.setState({
      value: newValue
    });
  };
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  onSuggestionSelected = (event, { method, suggestionValue }) => {
    console.log("shah", suggestionValue);
    this.setState({
      searchValue: suggestionValue,
      createContent: false,
      textbox: false,
      showContent: true
    });
    // this.displayContent();;
  };

  displayContent = () => {
    if (this.state.showContent === true)
      ReactDOM.render(
        <Content createContent={this.state.createContent} />,
        document.getElementById("content")
      );
  };

  createContent = () => {
    this.setState({
      createContent: true,
      textbox: false
    });
  };
  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Search for story",
      value,
      onChange: this.onChange
    };
    return (
      <Fragment>
        <Navbar />
        <div className="ui centered align grid" id="align">
          <h2>Search Contents and Start Generate Questions</h2>
        </div>
        <div>
          <div className="ui two column centered grid">
            {/* <h1> Search </h1> */}
            <div className="column">
              <Autosuggest
                suggestions={suggestions}
                renderInputComponent={renderInputComponent}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}
                onSuggestionSelected={this.onSuggestionSelected}
              />
            </div>
          </div>

          {this.state.showContent === true ? (
            <Content Content={this.state.showContent} />
          ) : (
            ""
          )}
        </div>
      </Fragment>
    );
  }
}
