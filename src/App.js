import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';

import api from './api/eb-api';

import './App.css';
import HomePage from './components/HomePage';
import DetailEvent from './components/DetailEvent';

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

  getDate = () => {
    // eslint-disable-next-line react/destructuring-assignment
    const utcDate = this.state.events.start.utc;
    const day = utcDate.getUTCDay();
    // eslint-disable-next-line no-console
    console.log(day);
  };

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
          <Route path="/detail" component={DetailEvent} />
        </Switch>
      </div>
    );
  }
}

export default App;
