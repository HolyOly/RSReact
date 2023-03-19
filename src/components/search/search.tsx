import React from 'react';
import SearchSvg from '../../assets/svg/search.svg';
import './search.css';

export class Search extends React.Component {
  render() {
    return (
      <div>
        <div className="search-wrapper">
          <div className="search__logo">
            <SearchSvg></SearchSvg>
          </div>
          <input
            // ref={props.refProp}
            className="search__input"
            autoComplete="off"
            type="search"
            name="search"
            placeholder="search"
            id="searchInput"
            // onChange={props.onChangeHandler}
          />
        </div>
      </div>
    );
  }
}
