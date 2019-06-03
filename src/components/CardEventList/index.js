import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CardEventList = props => {
  const { data } = props;
  return (
    <ul>
      {data.map(event => {
        return (
          <li key={event.id} id={event.id}>
            <Link to={`/detail/${event.id}`}>
              <p>{event.name.text}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

CardEventList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default CardEventList;
