import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import PropTypes from 'prop-types';
import Purchase from '../Purchase/index';

const createMarkup = html => {
  return { __html: html };
};

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
            <p className="event-detail__date">
              Aqui van la fecha y la hora del evento cuando logremos
              encontrarlas
            </p>
            <h1 className="event-detail__title">{dataArr.name.text}</h1>
            <p className="event-detail__calendar">Añadir al calendario</p>
          </div>
          <p>lugar</p>
          <p className="event-detail__place">
            Aqui va el lugar del evento cuando logremos encontrarlo
          </p>
          <div
            className="detail__description"
            dangerouslySetInnerHTML={createMarkup(dataArr.description.html)}
          />
          <Purchase
            linkBuy={dataArr.url}
            priceTicket={dataArr}
            coin={dataArr.currency}
          />
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
