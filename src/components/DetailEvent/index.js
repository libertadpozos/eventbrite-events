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
        <div className="detail">
          <Link className="detail-arrow" to="/">
            <div className="arrow-container">
              <i className="fas fa-arrow-left" />
            </div>
          </Link>
          <img
            className="detail-photo"
            src={dataArr.logo.original.url}
            alt={dataArr.name.text}
          />
          <div>
            <h1>{dataArr.name.text}</h1>
            <p>Añadir al calendario</p>
          </div>
          <p>lugar</p>
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
