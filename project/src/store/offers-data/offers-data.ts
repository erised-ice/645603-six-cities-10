import {OffersData} from '../../types/state';
import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {changeOfferStatusAction, fetchOffersAction} from '../api-actions';

const initialState: OffersData = {
  offers: [],
  isDataLoaded: false,
};

export const offersData = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isDataLoaded = false;
      })
      .addCase(changeOfferStatusAction.fulfilled, (state, action) => {
        const offer = state.offers.find((item) => item.id === action.payload.id);

        if (offer) {
          offer.isFavorite = action.payload.isFavorite;
        }
      });
  }
});
