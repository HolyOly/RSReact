import React, { ChangeEvent, useState } from 'react';
import SearchSvg from '../../assets/svg/search.svg';
import './search.css';

export function Search() {
  const [value, setValue] = useState('');

  // const handleLocalStolageValue = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   localStorage.setItem('searchQuery', e.target?.value);
  // };

  return (
    <div>
      <div className="search-wrapper">
        <div className="search__logo">
          <SearchSvg></SearchSvg>
        </div>
        <input
          className="search__input"
          autoComplete="off"
          type="search"
          name="search"
          placeholder="search"
          id="searchInput"
          onChange={(e) => setValue(e.target?.value)}
          data-testid="search-input-element"
        />
      </div>
      {value && <div className="storage-value ordinary-text">From localStorage: {value}</div>}
    </div>
  );
}
