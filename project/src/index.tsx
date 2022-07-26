import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {offers} from './mocks/offers';

const RentInfo = {
  PLACES_COUNT: 545,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      placesCount={RentInfo.PLACES_COUNT}
      offers = {offers}
    />
  </React.StrictMode>,
);
