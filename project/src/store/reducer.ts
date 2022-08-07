import {createReducer} from '@reduxjs/toolkit';
import {setCity, loadOffers, setDataLoadedStatus} from './action';
import {Offers} from '../types/offer';

type InitialState = {
  city: string;
  offers: Offers;
  isDataLoaded: boolean;
}

const initialState: InitialState = {
  city: 'Paris',
  offers: [],
  isDataLoaded: false,
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
    });
});

export {reducer};
