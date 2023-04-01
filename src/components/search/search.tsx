import React, { useState } from 'react';
import SearchSvg from '../../assets/svg/search.svg';
import './search.css';

export function Search() {
  const [value, setValue] = useState({
    valueFromLocalStorage: localStorage.getItem('searchQuery') || '',
    newValue: '',
  });

  const handleSetValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, newValue: e.target.value });
    localStorage.setItem('searchQuery', e.target.value);
  };

  return (
    <div>
      <div className="search-wrapper">
        <div className="search__logo">
          <SearchSvg />
        </div>
        <input
          className="search__input"
          autoComplete="off"
          type="search"
          name="search"
          placeholder="search"
          id="searchInput"
          onChange={(e) => handleSetValue(e)}
          data-testid="search-input-element"
        />
      </div>
      {value.valueFromLocalStorage && (
        <div className="storage-value ordinary-text">
          From localStorage: {value.valueFromLocalStorage}
        </div>
      )}
    </div>
  );
}
