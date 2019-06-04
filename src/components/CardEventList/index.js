import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import EventCard from '../EventCard';
import './styles.scss';

const CardEventList = props => {
  const { data } = props;
  const defaultImage =
    'https://www.eventbrite.es/static/images/search/placeholder3.png';
  return (
    <ul className="event-list__container">
      {data.map(event => {
        let logo;
        if (event.logo !== null) {
          logo = event.logo.url;
        } else {
          logo = defaultImage;
        }
        return (
          <li key={event.id}>
            <Link to={`/detail/${event.id}`}>
              <EventCard
                eventName={event.name.text}
                eventImage={logo}
                eventDate={event.start.local}
                eventPlace={event.venue.name}
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
