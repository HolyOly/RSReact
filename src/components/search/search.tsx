import React, { ChangeEvent } from 'react';
import SearchSvg from '../../assets/svg/search.svg';
import './search.css';

export class Search extends React.Component {
  state = { query: '', previousQuery: '' };

  changeSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ query: e.target.value });
    localStorage.setItem('searchQuery', e.target.value);
  };

  componentDidMount() {
    if (localStorage.getItem('searchQuery')) {
      this.setState({ previousQuery: localStorage.getItem('searchQuery') });
    }
  }

  render() {
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
            onChange={this.changeSearchValue}
            data-testid="search-input-element"
          />
        </div>
        {this.state.previousQuery && (
          <div className="storage-value ordinary-text">
            From localStorage: {this.state.previousQuery}
          </div>
        )}
      </div>
    );
  }
}
