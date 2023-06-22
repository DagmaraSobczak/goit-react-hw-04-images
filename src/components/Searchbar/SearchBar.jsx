import React from 'react';
import PropTypes from 'prop-types';
import css from './SearchBar.module.css';

const SearchBar = ({ getImages, onInputChange, query }) => {
  const handleSubmit = event => {
    event.preventDefault();
    getImages(query);
  };

  const handleChange = event => {
    onInputChange(event);
  };



  return (
    <header className={css.searchbar}>
      <form className={css.form} onSubmit={handleSubmit}>
        <button type="submit" className={css.searchFormButton}>
          <span className={css.searchFormButtonaLabel}>Search</span>
        </button>
        <input
          name="query"
          className={css.searchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
        />
      </form>
    </header>
  );
};

SearchBar.propTypes = {
  getImages: PropTypes.func.isRequired,
};

export default SearchBar;
