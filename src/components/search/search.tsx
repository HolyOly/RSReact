import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import SearchSvg from '../../assets/svg/search.svg';
import './search.css';

export interface ISearch {
  onSend: (query: string) => void;
}

export function Search(props: ISearch) {
  const [value, setValue] = useState('');

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      props.onSend(value);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setValue(e.target.value);
    }
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
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          data-testid="search-input-element"
        />
      </div>
    </div>
  );
}
