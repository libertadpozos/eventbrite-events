import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const getPrice = (min, max) => {
  if (min === max) {
    if (min === '0.00') {
      return 'Free';
    }
    return `${min}€`;
  }
  if (min === '0.00') {
    return `Free - ${max}€`;
  }
  return `${min}€ - ${max}€`;
};

const Purchase = props => {
  const { linkBuy, minimunPrice, maximunPrice } = props;
  if (minimunPrice !== undefined || maximunPrice !== undefined) {
    return (
      <section className="purchase">
        <a
          href={linkBuy}
          target="_blank"
          rel="noopener noreferrer"
          className="purchase__btn-buy"
        >
          Buy your ticket - {getPrice(minimunPrice, maximunPrice)}
        </a>
      </section>
    );
  }
  return (
    <section className="purchase">
      <a
        href={linkBuy}
        target="_blank"
        rel="noopener noreferrer"
        className="purchase__btn-buy"
      >
        Loading...
      </a>
    </section>
  );
};

Purchase.propTypes = {
  linkBuy: PropTypes.string.isRequired,
  minimunPrice: PropTypes.string.isRequired,
  maximunPrice: PropTypes.string.isRequired,
};

export default Purchase;
