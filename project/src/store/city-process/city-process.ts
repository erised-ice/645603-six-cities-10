import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {CityProcess} from '../../types/state';


const initialState: CityProcess = {
  city: 'Paris',
};

export const cityProcess = createSlice({
  name: NameSpace.City,
  initialState,
  reducers: {
    setCity: (state, action) => {
      state.city = action.payload;
    }
  }
});

export const {setCity} = cityProcess.actions;
