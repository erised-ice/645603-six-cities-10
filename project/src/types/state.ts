import {store} from '../store/index';
import {AuthorizationStatus} from '../const';
import {Offer, Offers} from './offer';
import {Reviews} from './review';
import {UserData} from './user-data';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  user: UserData | null;
};

export type OffersData = {
  offers: Offers;
  isDataLoaded: boolean;
}

export type OfferData = {
  offer: Offer | undefined;
}

export type NearbyOffersData = {
  nearbyOffers: Offers;
}

export type FavoriteOffersData = {
  favoriteOffers: Offers;
}

export type ReviewsData = {
  reviews: Reviews;
  isReviewLoading: boolean;
}

export type ErrorProcess = {
  error: string | null;
}

export type CityProcess = {
  city: string;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
