import React from 'react';
import PropTypes from 'prop-types';
import css from './Button.module.css';

const Button = loadMore => {
  return (
    <div className={css.position}>
      <button onClick={loadMore} className={css.Button}>
        Load More
      </button>
    </div>
  );
};

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};

export default Button;
