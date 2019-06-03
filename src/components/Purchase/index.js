import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const getCoin = coin => {
  if (coin === 'EUR') {
    return '€';
  }
  return coin;
};

const Purchase = props => {
  const { linkBuy, coin } = props;
  return (
    <section className="purchase">
      <a
        href={linkBuy}
        target="_blank"
        rel="noopener noreferrer"
        className="purchase__btn-buy"
      >
        Compra tu entrada - 00,00{getCoin(coin)}
      </a>
    </section>
  );
};

Purchase.propTypes = {
  linkBuy: PropTypes.string.isRequired,
  coin: PropTypes.string.isRequired,
};

export default Purchase;
