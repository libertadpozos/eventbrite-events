import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';

import api from '../../api/eb-api';

import './styles.scss';

import HomePage from '../HomePage';
import DetailEvent from '../DetailEvent';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      isFetching: true,
    };
    this.getEvents = this.getEvents.bind(this);
    this.detailEvent = this.detailEvent.bind(this);
  }

  componentDidMount() {
    this.getEvents();
  }

  componentDidUpdate() {
    const { venueId } = this.state;
    const createPromise = idVenue =>
      fetch(
        `https://www.eventbriteapi.com/v3/venues/${idVenue}/?token=E2Y5WNPQNPDDMIWHMFFZ`,
      ).then(res => res.json());

    if (venueId) {
      const promises = venueId.map(item => createPromise(item));
      Promise.all(promises).then(responses => {
        responses.map(event => {
          console.log(event.address.city);
          return event.address.city;
        });
      });
    }
  }

  getEvents = () => {
    api.get(`events/search/?location.address=madrid&page=1`).then(res =>
      this.setState({
        events: res.data.events,
        isFetching: false,
        venueId: res.data.events.map(item => item.venue_id),
      }),
    );
  };

  detailEvent(id) {
    const { events } = this.state;
    return events.find(event => event.id === id);
  }

  render() {
    const { events, isFetching } = this.state;

    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => <HomePage dataArr={events} loading={isFetching} />}
          />
          <Route
            path="/detail/:id"
            render={routerProps => (
              <DetailEvent
                loading={isFetching}
                match={routerProps.match}
                dataArr={this.detailEvent(routerProps.match.params.id)}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
