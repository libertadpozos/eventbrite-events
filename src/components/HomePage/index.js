import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CardEventList from '../CardEventList';
import './styles.scss';

const HomePage = props => {
  const { dataArr, loading } = props;
  return (
    <Fragment>
      <header className="page__header">
        <h1 className="page__title">Discover all the events around Madrid</h1>
      </header>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <section>
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
