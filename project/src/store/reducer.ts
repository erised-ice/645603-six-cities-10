import {createReducer} from '@reduxjs/toolkit';
import {setCity, loadOffers, setDataLoadedStatus, loadReviews, loadOffer} from './action';
import {Offer, Offers} from '../types/offer';
import {Reviews} from '../types/review';

type InitialStateType = {
  city: string;
  offers: Offers;
  offer: Offer | undefined;
  isDataLoaded: boolean;
  reviews: Reviews;
}

const initialState: InitialStateType = {
  city: 'Paris',
  offers: [],
  offer: undefined,
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
    .addCase(loadOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    });
});

export {reducer};
