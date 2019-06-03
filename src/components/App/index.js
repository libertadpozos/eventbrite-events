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
                dataArr={events}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
