import React from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

const Modal = ({ image, hideModal }) => {
  return (
    <div className={css.overlay} onClick={() => hideModal()}>
      <div className={css.modal}>
        <img className={css.modal_img} src={image.largeImageURL} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  image: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
};

export default Modal;
