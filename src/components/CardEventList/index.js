import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import EventCard from '../EventCard';
import './styles.scss';

const CardEventList = props => {
  const { data, moreResultsClick} = props;
  return (
    <Fragment>
        <ul className="event-list__container">
          {data.map(event => {
            if (event.logo !== null) {
              return (
                <li key={event.id}>
                  <Link to={`/detail/${event.id}`}>
                    <EventCard
                      eventName={event.name.text}
                      eventImage={event.logo.url}
                      eventDate={event.start.local}
                      eventPlace={event.venue.name}
                    />
                  </Link>
                </li>
              );
            }
            return <p>loading</p>;
          })}
        </ul>
        <button className="results-btn" onClick={moreResultsClick} type="button" >See more results</button>
    </Fragment>
  );
};

CardEventList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default CardEventList;
