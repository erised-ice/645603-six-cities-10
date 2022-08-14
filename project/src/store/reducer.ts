import {createReducer} from '@reduxjs/toolkit';
import {
  setCity,
  loadOffers,
  setDataLoadedStatus,
  loadReviews,
  loadOffer,
  loadNearbyOffers,
  requireAuthorization, setError, loadUser
} from './action';
import {Offer, Offers} from '../types/offer';
import {Reviews} from '../types/review';
import {AuthorizationStatus} from '../const';
import {UserData} from '../types/user-data';

type InitialStateType = {
  city: string;
  offers: Offers;
  offer: Offer | undefined;
  nearbyOffers: Offers;
  isDataLoaded: boolean;
  reviews: Reviews;
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  user: UserData | undefined;
}

const initialState: InitialStateType = {
  city: 'Paris',
  offers: [],
  offer: undefined,
  nearbyOffers: [],
  isDataLoaded: false,
  reviews: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  user: undefined
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
    .addCase(loadNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(loadUser, (state, action) => {
      state.user = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export {reducer};
