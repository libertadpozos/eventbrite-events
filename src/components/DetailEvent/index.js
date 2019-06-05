import React, { Fragment, PureComponent } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import PropTypes from 'prop-types';
import Purchase from '../Purchase/index';
import Loading from '../Loading';
import api from '../../api/eb-api';

class DetailEvent extends PureComponent {
  constructor(props) {
    super(props);
    // eslint-disable-next-line react/prop-types
    const { match } = this.props;
    const { id } = match.params;
    this.state = {
      idEvent: id,
      maxPrice: {},
      minPrice: {},
    };
  }

  componentDidMount() {
    const { idEvent } = this.state;
    this.getInfoEvent(idEvent);
  }

  getInfoEvent = id => {
    api.get(`events/${id}/?expand=ticket_availability`).then(res => {
      this.setState({
        maxPrice: res.data.ticket_availability.maximum_ticket_price,
        minPrice: res.data.ticket_availability.minimum_ticket_price,
      });
    });
  };

  createMarkup = html => {
    return { __html: html };
  };

  render() {
    const { loading, dataArr } = this.props;
    const { maxPrice, minPrice } = this.state;
    return (
      <Fragment>
        {loading ? (
          <Loading classLoading="loading__container" />
        ) : (
          <div className="detail">
            <div className="wrapper">
              <div className="wrapper__image">
                <img
                  className="detail-photo"
                  src={dataArr.logo.original.url}
                  alt={dataArr.name.text}
                />
              </div>
              <div className="wrapper__info">
                <Link className="detail-arrow" to="/">
                  <div className="arrow-container">
                    <i className="fas fa-arrow-left" />
                  </div>
                </Link>
                <div className="event-detail__info-container">
                  <p className="event-detail__date">Fecha</p>
                  <h1 className="event-detail__title">{dataArr.name.text}</h1>
                  <p className="event-detail__calendar">Añadir al calendario</p>
                </div>
                <p className="event-detail__place">Place</p>
                <div
                  className="event-detail__description"
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={this.createMarkup(
                    dataArr.description.html,
                  )}
                />
              </div>
            </div>
            <Purchase
              linkBuy={dataArr.url}
              priceTicket={dataArr}
              minimunPrice={minPrice.major_value}
              maximunPrice={maxPrice.major_value}
            />
          </div>
        )}
      </Fragment>
    );
  }
}

DetailEvent.propTypes = {
  loading: PropTypes.bool.isRequired,
  dataArr: PropTypes.objectOf().isRequired,
};

export default DetailEvent;
