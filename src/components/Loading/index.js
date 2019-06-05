import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Loading = props => {
  const { classLoading } = props;
  return (
    <div className={classLoading}>
      <div className="lds-facebook">
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

Loading.propTypes = {
  classLoading: PropTypes.string.isRequired,
};

export default Loading;
