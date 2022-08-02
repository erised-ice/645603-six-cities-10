import {createReducer} from '@reduxjs/toolkit';
import {getOffers, setCity} from './action';
import {offers} from '../mocks/offers';
import {Offers} from '../types/offer';

type InitialState = {
  city: string;
  offers: Offers;
}

const initialState: InitialState = {
  city: 'Paris',
  offers: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(getOffers, (state) => {
      state.offers = offers;
    });
});

export {reducer};
