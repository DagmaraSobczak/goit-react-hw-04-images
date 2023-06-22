import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

class Modal extends Component {
  componentDidMount() {
    console.log(this.props.image.largeImageURL); // Wyświetlenie wartości largeImageURL w konsoli po zamontowaniu komponentu
  }
  render() {
    return (
      <div className={css.overlay} onClick={() => this.props.hideModal()}>
        <div className={css.modal}>
          <img
            className={css.modal_img}
            src={this.props.image.largeImageURL}
            alt=""
          />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  image: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
};

export default Modal;
