import React, { Fragment, PureComponent } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import PropTypes from 'prop-types';
import Purchase from '../Purchase/index';
import api from '../../api/eb-api';

class DetailEvent extends PureComponent {
  constructor(props) {
    super(props);
    const { dataArr } = this.props;
    const { id } = dataArr;
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

  render() {
    const { loading, dataArr } = this.props;
    const { maxPrice, minPrice } = this.state;

    return (
      <Fragment>
        {loading ? (
          <p>Loading</p>
        ) : (
          <div>
            <Link to="/">
              <p>back</p>
            </Link>
            <div>
              <img src={dataArr.logo.url} alt={dataArr.name.text} />
              <h1>{dataArr.name.text}</h1>
              <p>Añadir al calendario</p>
            </div>
            <p>lugar</p>
            <p>{dataArr.description.text}</p>
            <Purchase
              linkBuy={dataArr.url}
              priceTicket={dataArr}
              coin={dataArr.currency}
            />
            <p>
              {maxPrice.major_value} {minPrice.major_value}
            </p>
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
