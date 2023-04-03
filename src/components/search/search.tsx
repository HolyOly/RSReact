import React, { useEffect, useState } from 'react';
import SearchSvg from '../../assets/svg/search.svg';
import './search.css';

export function Search() {
  const [value, setValue] = useState('');
  const [showedVal, setShowedValue] = useState('');

  const updateInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (localStorage.getItem('searchQuery')) {
      setShowedValue(localStorage.getItem('searchQuery') || '');
    }
  }, []);

  useEffect(() => {
    return () => {
      if (value) {
        localStorage.setItem('searchQuery', value);
      }
    };
  });

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
          onChange={updateInputValue}
          data-testid="search-input-element"
        />
      </div>
      {showedVal && (
        <div className="storage-value ordinary-text">From localStorage: {showedVal}</div>
      )}
    </div>
  );
}
