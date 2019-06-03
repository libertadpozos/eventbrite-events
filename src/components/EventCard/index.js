import React from 'react';
import PropTypes from 'prop-types';

const EventCard = props => {
  const { eventName, eventImage, eventDate } = props;

  return (
    <div className="card__container">
      <img className="card__image" src={eventImage} alt={eventName} />
      <p className="card__event-date">{eventDate}</p>
      <h2 className="card__event-name">{eventName}</h2>
      {/* <p className="card__event-place">{eventPlace}</p> */}
    </div>
  );
};

EventCard.propTypes = {
  eventName: PropTypes.string.isRequired,
  eventImage: PropTypes.string.isRequired,
  eventDate: PropTypes.string.isRequired,
  // eventPlace: PropTypes.string.isRequired,
};

export default EventCard;
