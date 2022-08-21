import {createSlice} from '@reduxjs/toolkit';
import {ErrorProcess} from '../../types/state';
import {NameSpace} from '../../const';
import {reviewAction} from '../api-actions';

const initialState: ErrorProcess = {
  error: null,
};

export const errorProcess = createSlice({
  name: NameSpace.Error,
  initialState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(reviewAction.rejected, (state) => {
        state.error = 'Server error';
      });
  }
});

export const {setError, clearError} = errorProcess.actions;
