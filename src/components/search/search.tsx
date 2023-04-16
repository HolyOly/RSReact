import React, { KeyboardEvent } from 'react';
import SearchSvg from '../../assets/svg/search.svg';
import './search.css';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectSearchText, update } from '../../features/searchQuery/search';

export interface ISearch {
  onSend: (query: string) => void;
}

export function Search(props: ISearch) {
  const inputText = useAppSelector(selectSearchText);
  const dispatch = useAppDispatch();

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      props.onSend(inputText);
    }
  };

  return (
    <>
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
          defaultValue={inputText}
          onChange={(e) => dispatch(update(e.target.value))}
          onKeyDown={handleKeyDown}
          data-testid="search-input-element"
        />
      </div>
    </>
  );
}
