import { render, screen } from '@testing-library/react';
import React from 'react';
import { Pagination } from './pagination';

describe('Pagination', () => {
  beforeEach(() =>
    render(
      <Pagination
        initialDrawingPage={1}
        curPage={1}
        setCurPage={() => {}}
        handleDrawPagePrev={() => {}}
        handleDrawPageNext={() => {}}
        totalPages={10}
      />
    )
  );
  test('check pages', () => {
    const firstPage = screen.getByText('1');
    const secondPage = screen.getByText('2');
    expect(firstPage).toBeInTheDocument();
    expect(secondPage).toBeInTheDocument();
    expect(firstPage).toHaveClass('cur-page');
    expect(secondPage).toHaveClass('page-link');
  });

  test('check prev next links', () => {
    const prev = screen.getByText('prev');
    const next = screen.getByText('next');
    expect(prev).toBeInTheDocument();
    expect(next).toBeInTheDocument();
    expect(prev).toHaveClass('page-link');
    expect(next).toHaveClass('page-link');
  });
});
