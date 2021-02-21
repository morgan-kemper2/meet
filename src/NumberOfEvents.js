import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
  };

  render() {
    return (
      <div className="numberOfEvents">
        <label>Number of Events: </label>
        <input
          type="text"
          className="numberInput"
          value={this.state.numberOfEvents}
          onChange={this.submitNumber}
        />
      </div>
    );
  }
}

export default NumberOfEvents;