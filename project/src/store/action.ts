import {createAction} from '@reduxjs/toolkit';
import {Offers} from '../types/offer';

export const setCity = createAction<string>('setCity');
export const setOffers = createAction('setOffers'); /* Оставить этот экшн или объединить с лоад офферс? */
export const loadOffers = createAction<Offers>('data/loadOffers'); /* Если тут отделять Data то в других экшенах тоже сделать какой-то домен? Как в демо - game */
