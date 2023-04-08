import React, { useEffect, useState } from 'react';
import { Welcome } from '../sectionWelcome/welcome';
import './home.css';
import { Search } from '../search/search';
import { CardApi } from '../card/apiCard';

export function Home() {
  const [data, setData] = useState<IFullFetchData>();
  const [query, setQuery] = useState('');
  const [curPage, setCurPage] = useState(1);
  const [initialDrawingPage, setinitialDrawingPage] = useState(1);
  const [sorting, setSorting] = useState('relevant');

  const handleSendQuery = (query: string) => {
    setQuery(query);
  };

  useEffect(() => {
    if (query) {
      const fetchData = async () => {
        const rawQuotes = await fetch(
          `https://api.unsplash.com/search/photos?client_id=${
            import.meta.env.VITE_ACCESS_KEY
          }&page=${curPage}&query=${query}&order_by=${sorting}&per_page=12`
        );
        const quotes = await rawQuotes.json();
        setData(quotes);
        console.log(quotes);
      };
      fetchData();
    }
  }, [query, curPage, sorting, initialDrawingPage]);

  const handleDrawPagePrev = () => {
    if (initialDrawingPage > 1) {
      setinitialDrawingPage(initialDrawingPage - 10);
    }
  };

  const handleDrawPageNext = () => {
    if (data?.total_pages && initialDrawingPage + 9 < data?.total_pages) {
      setinitialDrawingPage(initialDrawingPage + 10);
    }
  };

  const createArrOfPages = (from: number) => {
    const arr = [];
    for (let i = from - 1; arr.length < 10; i++) {
      arr.push(i);
    }
    return arr;
  };

  return (
    <div className="home-wrapper position-wrapper">
      <Welcome />
      <div className="cards-header content-wrapper">
        <p className="cards-header-title">Service and our projects</p>
        <div className="cards-header-items">
          <Search onSend={handleSendQuery} />
          <label>
            Sort by:
            <select name="sort" defaultValue={sorting} onChange={(e) => setSorting(e.target.value)}>
              <option value="relevant">relevant</option>
              <option value="latest">latest</option>
            </select>
          </label>
        </div>
      </div>
      <div className="cards cards-wrapper content-wrapper">
        {data?.results.map((card, index) => (
          <CardApi {...card} key={index} />
        ))}
      </div>
      <div className="pagination content-wrapper">
        <a className="page-link" onClick={handleDrawPagePrev}>
          prev
        </a>
        {data?.total_pages &&
          createArrOfPages(initialDrawingPage).map((page, index) => (
            <a
              className={`page-link ${page + 1 === curPage ? 'cur-page' : ''}`}
              onClick={() => setCurPage(page + 1)}
              key={index}
            >
              {page + 1}
            </a>
          ))}
        <a className="page-link" onClick={handleDrawPageNext}>
          next
        </a>
      </div>
    </div>
  );
}
