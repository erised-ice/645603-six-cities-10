import {createReducer} from '@reduxjs/toolkit';
import {setCity, loadOffers, setDataLoadedStatus, loadReviews} from './action';
import {Offers} from '../types/offer';
import {Reviews} from '../types/review';

type InitialState = {
  city: string;
  offers: Offers;
  isDataLoaded: boolean;
  reviews: Reviews;
}

const initialState: InitialState = {
  city: 'Paris',
  offers: [],
  isDataLoaded: false,
  reviews: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    });
});

export {reducer};
