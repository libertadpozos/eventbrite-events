import React from 'react';
import PropTypes from 'prop-types';

const CardEventList = props => {
  const { data } = props;
  return (
    <ul>
      {data.map(event => {
        return (
          <li key={event.id}>
            <p>{event.name.text}</p>
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
