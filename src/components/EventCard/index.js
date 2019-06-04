import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const EventCard = props => {
  const { eventName, eventImage, eventDate } = props;

  const date = new Date(eventDate);
  const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const dayWeek = week[date.getDay()];
  const month = months[date.getMonth()].substring(0, 3);
  const numDay = date.getDate();
  const formatedDate = `${dayWeek}, ${month} ${numDay} `;
  return (
    <div
      className="card__container"
    >
      <div className="img__container" style={{ backgroundImage: `url(${eventImage})` }}></div>
      <div className="info__container">
        <p className="card__event-date">{formatedDate}</p>
        <h2 className="card__event-name">{eventName}</h2>
        <p className="card__event-place">Madrid</p>
      </div>
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
