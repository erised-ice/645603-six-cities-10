import {createAction} from '@reduxjs/toolkit';
import {Offer, Offers} from '../types/offer';
import {Reviews} from '../types/review';

export const setCity = createAction<string>('setCity');
export const loadOffers = createAction<Offers>('loadOffers');
export const loadOffer = createAction<Offer>('loadOffer');
export const loadNearbyOffers = createAction<Offers>('loadNearbyOffers');
export const loadReviews = createAction<Reviews>('loadReviews');
export const setDataLoadedStatus = createAction<boolean>('setDataLoadedStatus');
