import ReactDOMServer from 'react-dom/server';
import React from 'react';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { GardenApp } from './GardenApp';
import './index.css';

export function render(url: string) {
  return ReactDOMServer.renderToString(
    <React.StrictMode>
      <Provider store={store}>
        <StaticRouter location={url}>
          <GardenApp />
        </StaticRouter>
      </Provider>
    </React.StrictMode>
  );
}
