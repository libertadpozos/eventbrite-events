import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import PropTypes from 'prop-types';

const DetailEvent = props => {
  const { loading, dataArr, match } = props;
  const events = dataArr.find(
    (event, radix) => event.id === parseInt(match.params, radix),
  );
  console.log(events);

  return (
    <Fragment>
      {loading ? (
        <p>Loading</p>
      ) : (
        <div>
          <Link to="/">
            <p>back</p>
          </Link>
          <h1>{events.name.text}</h1>
          <p>lugar</p>
        </div>
      )}
    </Fragment>
  );
};

DetailEvent.propTypes = {
  dataArr: PropTypes.arrayOf(PropTypes.object).isRequired,
  match: PropTypes.objectOf().isRequired,
  loading: PropTypes.bool.isRequired,
};

export default DetailEvent;
