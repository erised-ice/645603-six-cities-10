import {createReducer} from '@reduxjs/toolkit';
import {getOffers, setCity} from './action';
import {offers} from '../mocks/offers';

const initialState = {
  city: 'Paris',
  offers: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      const city = action.payload;
      state.city = city;
    })
    .addCase(getOffers, (state) => {
      state.offers = offers;
    });
});

export {reducer};
