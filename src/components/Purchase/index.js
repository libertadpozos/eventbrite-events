import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const Purchase = () => {
  return (
    <section className="purchase">
      <Link to="/" className="purchase__btn-buy">
        Compra tu entrada - 28,50€ - 100€
      </Link>
    </section>
  );
};

export default Purchase;
