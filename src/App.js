import React, { PureComponent } from 'react';

import api from './api/eb-api';

import './App.css';

class App extends PureComponent {
  state = {
    events: [],
  };

  getEvents = () => {
    api
      .get('events/search/')
      .then(res => this.setState({ events: res.data.events }));
  };

  render() {
    const { events } = this.state;
    const eventList = events.map(event => (
      <div key={event.id}>{event.name.text}</div>
    ));

    return (
      <div className="App">
        <button type="button" onClick={this.getEvents.bind(this)}>
          Get Events
        </button>
        <section>
          <h1>Event List</h1>
          {eventList}
        </section>
      </div>
    );
  }
}

export default App;
