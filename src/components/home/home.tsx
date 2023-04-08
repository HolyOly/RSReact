import React, { useEffect, useState } from 'react';
import { Welcome } from '../sectionWelcome/welcome';
import './home.css';
import { Search } from '../search/search';
import { CardApi } from '../card/apiCard';

export function Home() {
  const [data, setData] = useState<IFetchData[]>([]);
  const [query, setQuery] = useState('');

  const handleSendQuery = (query: string) => {
    setQuery(query);
  };

  useEffect(() => {
    const fetchData = async () => {
      const rawQuotes = await fetch(
        `https://api.unsplash.com/search/photos?client_id=${
          import.meta.env.VITE_ACCESS_KEY
        }&page=1&query=${query}&per_page=12`
      );
      const quotes = await rawQuotes.json();
      setData(quotes.results);
      console.log(quotes);
    };

    fetchData();
  }, [query]);

  return (
    <div className="home-wrapper position-wrapper">
      <Welcome />
      <div className="cards-header content-wrapper">
        <p className="cards-header-title">Service and our projects</p>
        <div className="cards-header-items">
          <Search onSend={handleSendQuery} />
        </div>
      </div>
      <div className="cards cards-wrapper content-wrapper">
        {data.map((card, index) => (
          <CardApi {...card} key={index} />
        ))}
      </div>
    </div>
  );
}
