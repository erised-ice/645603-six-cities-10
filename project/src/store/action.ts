import {createAction} from '@reduxjs/toolkit';
import {Offers} from '../types/offer';

export const setCity = createAction<string>('setCity');
export const loadOffers = createAction<Offers>('loadOffers');
export const setDataLoadedStatus = createAction<boolean>('setDataLoadedStatus');
