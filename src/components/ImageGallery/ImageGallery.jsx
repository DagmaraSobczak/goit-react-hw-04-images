import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

const ImageGallery = ({ images, onSelect, showModal }) => {
  const handleImageSelect = largeImageURL => {
    onSelect(largeImageURL);
  };

  return (
    <ul className={css.imageGallery}>
      {images.map((image, index) => (
        <ImageGalleryItem
          showModal={showModal}
          key={index}
          image={image}
          onSelect={handleImageSelect}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default ImageGallery;
