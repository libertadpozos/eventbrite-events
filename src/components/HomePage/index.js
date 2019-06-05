import React from 'react';
import PropTypes from 'prop-types';
import CardEventList from '../CardEventList';
import './styles.scss';
import Loading from '../Loading';

const HomePage = props => {
  const { dataArr, loading } = props;
  return (
    <div className="page__container">
      <div className="circle">
        <div className="circle--back" />
        <div className="circle--front" />
      </div>
      <header className="page__header">
        <h1 className="page__title">Discover all the events around Madrid</h1>
      </header>
      {loading ? (
        <Loading classLoading="loading__container" />
      ) : (
        <section className="card-list__section">
          <CardEventList data={dataArr} />
        </section>
      )}
    </div>
  );
};

HomePage.propTypes = {
  dataArr: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default HomePage;
