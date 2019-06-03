import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import PropTypes from 'prop-types';

const DetailEvent = props => {
  const { loading, dataArr } = props;

  return (
    <Fragment>
      {loading ? (
        <p>Loading</p>
      ) : (
        <div>
          <Link to="/">
            <p>back</p>
          </Link>
          <img src={dataArr.logo.url} alt={dataArr.name.text} />
          <div className="event-detail__info-container">
            <p className="event-detail__date">Fecha y hora</p>
            <h1 className="event-detail__title">{dataArr.name.text}</h1>
            <p className="event-detail__calendar">Añadir al calendario</p>
          </div>
          <p className="event-detail__place">lugar</p>
          <p>{dataArr.description.text}</p>
        </div>
      )}
    </Fragment>
  );
};

DetailEvent.propTypes = {
  loading: PropTypes.bool.isRequired,
  dataArr: PropTypes.objectOf().isRequired,
};

export default DetailEvent;
