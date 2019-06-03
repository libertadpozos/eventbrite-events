import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import EventCard from '../EventCard';

const CardEventList = props => {
  const { data } = props;
  return (
    <ul className="event-list__container">
      {data.map(event => {
        return (
          <li key={event.id}>
            <Link to={`/detail/${event.id}`}>
              <EventCard
                eventName={event.name.text}
                eventImage={event.logo.url}
                eventDate={event.start.utc}
                // eventPlace={event.description.text}
              />
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
