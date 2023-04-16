import React, { useState } from 'react';
import { useGetAlbumsQuery } from '../../app/services/apiCards';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Welcome } from '../sectionWelcome/welcome';
import { Search } from '../search/search';
import { CardApi } from '../card/apiCard';
import { Loader } from '../loader/loader';
import { Pagination } from '../pagination/pagination';
import './home.css';
import {
  selectFetchParams,
  updateCurPage,
  updateQuery,
  updateSorting,
} from '../../features/fetchCards/fetchCardsParams';

export function Home() {
  const [initialDrawingPage, setinitialDrawingPage] = useState(1);

  const searchParams = useAppSelector(selectFetchParams);
  const dispatch = useAppDispatch();

  const {
    data: cardsObject,
    isLoading,
    isError,
    error,
  } = useGetAlbumsQuery({
    curPage: searchParams.curPage,
    query: searchParams.query,
    sorting: searchParams.sorting,
  });

  const handleSendQuery = (query: string) => {
    dispatch(updateQuery(query));
  };

  const handleDrawPagePrev = () => {
    if (initialDrawingPage > 1) {
      setinitialDrawingPage(initialDrawingPage - 10);
    }
  };

  const handleDrawPageNext = () => {
    if (cardsObject?.total_pages && initialDrawingPage + 9 < cardsObject?.total_pages) {
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
            <select
              name="sort"
              defaultValue={searchParams.sorting}
              onChange={(e) => dispatch(updateSorting(e.target.value))}
            >
              <option value="relevant">relevant</option>
              <option value="latest">latest</option>
            </select>
          </label>
        </div>
      </div>
      {isLoading && <Loader />}
      {isError && <p>{`${error}`}</p>}
      <div className="cards cards-wrapper content-wrapper">
        {cardsObject?.results.map((card, index) => (
          <CardApi {...card} key={index} />
        ))}
      </div>
      {cardsObject?.total_pages && cardsObject?.total_pages > 0 && (
        <div className="pagination content-wrapper">
          <Pagination
            initialDrawingPage={initialDrawingPage}
            curPage={searchParams.curPage}
            totalPages={cardsObject?.total_pages}
            setCurPage={(page) => dispatch(updateCurPage(page))}
            handleDrawPagePrev={handleDrawPagePrev}
            handleDrawPageNext={handleDrawPageNext}
          />
        </div>
      )}
    </div>
  );
}
