import React from 'react';
import PropTypes from 'prop-types';
import EventCard from '../EventCard';
import './styles.scss';

const CardEventList = props => {
  const { data } = props;
  return (
    <ul className="event-list__container">
      {data.map(event => {
        return (
          <li key={event.id}>
            <EventCard
              eventName={event.name.text}
              eventImage={event.logo.url}
              eventDate={event.start.utc}
              // eventPlace={event.description.text}
            />
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
