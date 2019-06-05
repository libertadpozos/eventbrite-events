import React from 'react';
import PropTypes from 'prop-types';
import CardEventList from '../CardEventList';
import './styles.scss';

const HomePage = props => {
  const { dataArr, loading,moreResultsClick } = props;

  let cardClasses = "card-list__section";
  if(loading) {cardClasses += " hidden__card-list"};
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
        <p>Loading...</p>
      ) : ''}
       <section className={cardClasses}>
          <CardEventList data={dataArr} moreResultsClick={moreResultsClick}/>
        </section>
    </div>
  );
};

HomePage.propTypes = {
  dataArr: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default HomePage;
