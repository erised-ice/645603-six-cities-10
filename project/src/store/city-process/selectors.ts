import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {createSelector} from '@reduxjs/toolkit';
import {Offers} from '../../types/offer';

export const getOffers = (state: State): Offers => state[NameSpace.Offers].offers;
export const getCity = (state: State): string => state[NameSpace.City].city;

export const filterOffers = createSelector(
  [getOffers, getCity],
  (offers, city) => offers.filter((offer) => offer.city.name === city)
);
