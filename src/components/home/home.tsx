import React, { useEffect, useState } from 'react';
import { Welcome } from '../sectionWelcome/welcome';
import { Search } from '../search/search';
import { CardApi } from '../card/apiCard';
import { Loader } from '../loader/loader';
import { Pagination } from '../pagination/pagination';
import './home.css';

export function Home() {
  const [data, setData] = useState<IFullFetchData>();
  const [query, setQuery] = useState(localStorage.getItem('searchQuery') || '');
  const [curPage, setCurPage] = useState(1);
  const [initialDrawingPage, setinitialDrawingPage] = useState(1);
  const [sorting, setSorting] = useState('relevant');
  const [isLoading, setLoading] = useState(false);

  const handleSendQuery = (query: string) => {
    setQuery(query);
  };

  useEffect(() => {
    if (query) {
      setLoading(true);
      const fetchData = async () => {
        const rawQuotes = await fetch(
          `https://api.unsplash.com/search/photos?client_id=${
            import.meta.env.VITE_ACCESS_KEY
          }&page=${curPage}&query=${query}&order_by=${sorting}&per_page=12`
        );
        const quotes = await rawQuotes.json();
        setData(quotes);
      };
      fetchData().finally(() => setLoading(false));
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
      {isLoading && <Loader />}
      <div className="cards cards-wrapper content-wrapper">
        {data?.results.map((card, index) => (
          <CardApi {...card} key={index} />
        ))}
      </div>
      {data?.total_pages && data?.total_pages > 0 && (
        <div className="pagination content-wrapper">
          <Pagination
            initialDrawingPage={initialDrawingPage}
            curPage={curPage}
            totalPages={data?.total_pages}
            setCurPage={(page) => setCurPage(page)}
            handleDrawPagePrev={handleDrawPagePrev}
            handleDrawPageNext={handleDrawPageNext}
          />
        </div>
      )}
    </div>
  );
}
