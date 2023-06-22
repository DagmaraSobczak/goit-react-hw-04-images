import React, { useState, useEffect } from 'react';
import SearchBar from './Searchbar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';

import axios from 'axios';
import Loader from './Loader/Loader';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(null);
  const [totalItems, setTotalItems] = useState(0);

  const getImages = async () => {
    if (searchQuery.trim() === '') {
      return;
    }

    const API_KEY = '34772301-2558f091501b1829db2bd0b62';

    setLoading(true);

    try {
      const response = await axios.get(
        `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      );

      const resObject = response.data;
      const newImages = resObject.hits;

      setImages(prevImages => [...prevImages, ...newImages]);
      setTotalItems(resObject.totalHits);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching images:', error);
      setLoading(false);
    }
  };

  const handleSearchSubmit = query => {
    setSearchQuery(query);
    setImages([]);
    setPage(1);
    setTotalItems(0);
    getImages();
  };

  const handleInputChange = event => {
    const searchQuery = event.target.value;
    setSearchQuery(searchQuery);
    setImages([]);
    setPage(1);
    setTotalItems(0);
    getImages();
  };

  const handleGetImages = () => {
    setPage(prevPage => prevPage + 1);
  };

  const loadMore = () => {
    getImages();
  };

  const handleModalOpen = index => {
    setShowModal(index);
  };

  const handleModalClose = () => {
    setShowModal(null);
  };

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.keyCode === 27) {
        handleModalClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const showMore = images.length !== totalItems;
  let showImage = null;
  if (showModal) {
    showImage = images.find(image => image.largeImageURL === showModal);
  }
  if (!showImage || !showImage.largeImageURL) {
    showImage = null;
  }

  return (
    <div className="App">
      <SearchBar
        onSubmit={handleSearchSubmit}
        onInputChange={handleInputChange}
        query={searchQuery}
        getImages={handleGetImages}
      />

      <ImageGallery
        onSelect={handleModalOpen}
        showModal={showModal}
        images={images}
      />
      {showMore && <Button loadMore={loadMore} />}
      {loading && <Loader />}
      {showModal && <Modal hideModal={handleModalClose} image={showImage} />}
    </div>
  );
};

export default App;
