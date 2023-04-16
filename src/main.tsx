import { GardenApp } from './GardenApp';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { BrowserRouter } from 'react-router-dom';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
// import { apiCards } from './components/services/apiCards';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <ApiProvider api={apiCards}> */}
      <Provider store={store}>
        <GardenApp />
      </Provider>
      {/* </ApiProvider> */}
    </BrowserRouter>
  </React.StrictMode>
);
