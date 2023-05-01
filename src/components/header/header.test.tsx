import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../app/store';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { Header } from './header';

describe('Hrader', () => {
  beforeEach(() =>
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    )
  );
  it('should render the component onto the screen', () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );
    const svgEl = container.querySelector('leaf-logo') as SVGElement;
    waitFor(() => expect(svgEl as SVGElement).toHaveClass('leaf-logo'));
  });

  it('check for a link', async () => {
    const home = screen.getByText('Home') as HTMLElement;
    const about = screen.getByText('About us') as HTMLElement;
    const contscts = screen.getByText('Contacts') as HTMLElement;

    expect(home).toBeInTheDocument();
    expect(about).toBeInTheDocument();
    expect(contscts).toBeInTheDocument();

    expect(home).toHaveClass('links-item');
    expect(about).toHaveClass('links-item');
    expect(contscts).toHaveClass('links-item');

    fireEvent.click(home);
    expect(home).toBeInTheDocument();
    expect(home).toHaveClass('active');

    fireEvent.click(about);
    expect(about).toBeInTheDocument();
    expect(about).toHaveClass('active');

    fireEvent.click(contscts);
    expect(contscts).toBeInTheDocument();
    expect(contscts).toHaveClass('active');
  });

  it('check for a logo', async () => {
    expect(screen.getByText('Plants') as HTMLElement).toBeInTheDocument();
  });
});
