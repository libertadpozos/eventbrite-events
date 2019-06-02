import React, { PureComponent } from 'react';

import api from './api/eb-api';

import './App.css';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      isFetching: true,
    };
    this.getEvents = this.getEvents.bind(this);
  }

  componentDidMount() {
    this.getEvents();
  }

  getEvents = () => {
    api
      .get('events/search/')
      .then(res =>
        this.setState({ events: res.data.events, isFetching: false }),
      );
  };

  render() {
    const { events, isFetching } = this.state;
    return (
      <div className="App">
        <header> Discover all the events around Madrid</header>
        {isFetching ? (
          <p>Loading...</p>
        ) : (
          <section>
            <h1>Event List</h1>
            {events.map(event => (
              <div key={event.id}>{event.name.text}</div>
            ))}
          </section>
        )}
      </div>
    );
  }
}

export default App;
