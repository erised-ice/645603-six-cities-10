import {createSlice} from '@reduxjs/toolkit';
import {NearbyOffersData} from '../../types/state';
import {NameSpace} from '../../const';
import {fetchNearbyOffersAction} from '../api-actions';

const initialState: NearbyOffersData = {
  nearbyOffers: [],
};

export const nearbyOffersData = createSlice({
  name: NameSpace.NearbyOffers,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchNearbyOffersAction.fulfilled, (state, action) => {
        state.nearbyOffers = action.payload;
      });
  }
});
