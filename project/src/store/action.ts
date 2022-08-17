import {createAction} from '@reduxjs/toolkit';
import {Offer, Offers} from '../types/offer';
import {Reviews} from '../types/review';
import {AppRoute, AuthorizationStatus} from '../const';
import {UserData} from '../types/user-data';

export const setCity = createAction<string>('setCity');
export const loadOffers = createAction<Offers>('loadOffers');
export const loadOffer = createAction<Offer>('loadOffer');
export const loadNearbyOffers = createAction<Offers>('loadNearbyOffers');
export const loadReviews = createAction<Reviews>('loadReviews');
export const loadUser = createAction<UserData>('loadUser');
export const setDataLoadedStatus = createAction<boolean>('setDataLoadedStatus');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setError = createAction<string | null>('setError');
export const redirectToRoute = createAction<AppRoute>('redirectToRoute');
export const setReviewLoadingStatus = createAction<boolean>('setReviewLoadingStatus');
