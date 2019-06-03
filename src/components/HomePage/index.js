import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const HomePage = props => {
  const { dataArr, loading } = props;
  return (
    <Fragment>
      <header> Discover all the events around Madrid</header>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <section>
          <h1>Event List</h1>
          {dataArr.map(event => (
            <div key={event.id}>
              <p>{event.name.text}</p>
            </div>
          ))}
        </section>
      )}
    </Fragment>
  );
};

HomePage.propTypes = {
  dataArr: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default HomePage;
