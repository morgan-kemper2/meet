import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, checkToken, getAccessToken } from './api';
import './nprogress.css';
import Login from './Login';


class App extends Component {
  state = {
    events: [],
    currentLocation: 'all',
    locations: [],
    numberOfEvents: 32,
  };

  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location)
        .length;
      const city = location.split(', ').shift();
      return { city, number };
    });
    return data;
  };

  updateEvents = (location, eventCount) => {
    const { currentLocation, numberOfEvents } = this.state;
    if (location) {
      getEvents().then((response) => {
        const locationEvents =
          location === 'all'
            ? response.events
            : response.events.filter((event) => event.location === location);
        const events = locationEvents.slice(0, numberOfEvents);
        return this.setState({
          events: events,
          currentLocation: location,
          locations: response.locations,
        });
      });
    } else {
      getEvents().then((response) => {
        const locationEvents =
          currentLocation === 'all'
            ? response.events
            : response.events.filter(
                (event) => event.location === currentLocation
              );
        const events = locationEvents.slice(0, eventCount);
        return this.setState({
          events: events,
          numberOfEvents: eventCount,
          locations: response.locations,
        });
      });
    }
  };

  componentDidMount() {
    const accessToken = localStorage.getItem("access_token");
    const validToken = accessToken !== null ? await checkToken(accessToken) : false;
    this.setState({tokenCheck: validToken});
    if (validToken === true) this.updateEvents()
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.mounted = true;
    if (code && this.mounted === true && validToken === false){
      this.setState({tokenCheck:true});
      this.updateEvents()
    }
    this.mounted = true;
    getEvents().then((response) => {
      if (this.mounted) {
        this.setState({
          events: response.events,
          locations: response.locations,
        });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {

    return tokenCheck === false ? (
      <div className="App">
        <Login />
        </div>
    ) : ( 
      <div className="App">
        <CitySearch
          updateEvents={this.updateEvents}
          locations={this.state.locations}
        />
        <NumberOfEvents
          updateEvents={this.updateEvents}
          numberOfEvents={this.state.numberOfEvents}
        />
        
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
