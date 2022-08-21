import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const';
import {userProcess} from './user-process/user-process';
import {cityProcess} from './city-process/city-process';
import {offerData} from './offer-data/offer-data';
import {errorProcess} from './error-process/error-process';
import {nearbyOffersData} from './nearby-offers-data/nearby-offers-data';
import {offersData} from './offers-data/offers-data';
import {reviewsData} from './reviews-data/reviews-data';

export const rootReducer = combineReducers({
  [NameSpace.City]: cityProcess.reducer,
  [NameSpace.Error]: errorProcess.reducer,
  [NameSpace.NearbyOffers]: nearbyOffersData.reducer,
  [NameSpace.Offer]: offerData.reducer,
  [NameSpace.Offers]: offersData.reducer,
  [NameSpace.Reviews]: reviewsData.reducer,
  [NameSpace.User]: userProcess.reducer,
});
