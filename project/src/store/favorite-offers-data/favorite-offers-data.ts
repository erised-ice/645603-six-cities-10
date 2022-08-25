import {FavoriteOffersData} from '../../types/state';
import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {changeOfferStatusAction, fetchFavoriteOffersAction} from '../api-actions';

const initialState: FavoriteOffersData = {
  favoriteOffers: [],
};

export const favoriteOffersData = createSlice({
  name: NameSpace.FavoriteOffers,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoriteOffersAction.fulfilled, (state, action) => {
        state.favoriteOffers = action.payload;
      })
      .addCase(changeOfferStatusAction.fulfilled, (state, action) => {
        const hasOffer = state.favoriteOffers.some((offer) => offer.id === action.payload.id);

        if (hasOffer) {
          state.favoriteOffers = state.favoriteOffers.filter((offer) => offer.id !== action.payload.id);
        } else {
          state.favoriteOffers.push(action.payload);
        }
      });
  }
});
