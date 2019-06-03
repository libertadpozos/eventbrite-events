import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import PropTypes from 'prop-types';
import Purchase from '../Purchase/index';

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
          <div>
            <img src={dataArr.logo.url} alt={dataArr.name.text} />
            <h1>{dataArr.name.text}</h1>
            <p>Añadir al calendario</p>
          </div>
          <p>lugar</p>
          <p>{dataArr.description.text}</p>
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
