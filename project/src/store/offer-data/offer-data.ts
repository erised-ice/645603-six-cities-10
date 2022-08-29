import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {OfferData} from '../../types/state';
import {changeOfferStatusAction, fetchOfferAction} from '../api-actions';

const initialState: OfferData = {
  offer: undefined,
};

export const offerData = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.offer = action.payload;
      })
      .addCase(changeOfferStatusAction.fulfilled, (state, action) => {
        state.offer = state.offer?.id === action.payload.id ? action.payload : state.offer;
      });
  }
});
