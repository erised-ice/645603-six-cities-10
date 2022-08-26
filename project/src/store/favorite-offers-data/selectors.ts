import {State} from '../../types/state';
import {Offers} from '../../types/offer';
import {NameSpace} from '../../const';

export const getFavoriteOffers = (state: State): Offers => state[NameSpace.FavoriteOffers].favoriteOffers;
