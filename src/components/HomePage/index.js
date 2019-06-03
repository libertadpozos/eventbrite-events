import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CardEventList from '../CardEventList';

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
          <CardEventList data={dataArr} />
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
