import React, { Component } from 'react';

class CitySearch extends Component {
  state = {
    locations: this.props.locations,
    query: '',
    suggestions: [],
    showSuggestions: false,
  };

  handleInputChanged = (event) => {
            const value = event.target.value;
            const suggestions = this.props.locations.filter((location) => {
                return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
            });
            this.setState({query: value, suggestions,});
    };

  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion,
      suggestions: [],
      showSuggestions: false,
    });
    this.props.updateEvents(suggestion);
  };

  render() {
    return (
      <div className="CitySearch">
        <label>Name of city: </label>
        <div>
          <input
            label="City name"
            type="text"
            className="citySearchInput"
            value={this.state.query}
            onChange={this.handleInputChanged}
          />
          <ul
            className={
              this.state.showSuggestions
                ? 'suggestions showSuggestions'
                : 'display-none'
            }
          >
            {this.state.suggestions.map((suggestion) => (
              <li
                className="suggestionCity"
                key={suggestion}
                onClick={() => this.handleItemClicked(suggestion)}
              >
                {suggestion}
              </li>
            ))}
            <li onClick={() => this.handleItemClicked('all')}>
              <b>See all cities</b>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default CitySearch;