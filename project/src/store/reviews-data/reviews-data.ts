import {createSlice} from '@reduxjs/toolkit';
import {ReviewsData} from '../../types/state';
import {NameSpace} from '../../const';
import {fetchReviewsAction, reviewAction} from '../api-actions';

const initialState: ReviewsData = {
  isReviewLoading: false,
  reviews: [],
};

export const reviewsData = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        const newReviews = action.payload;

        state.reviews = newReviews.sort((a, b) => Date.parse(b.date) - Date.parse(a.date)).filter((_, index) => index < 10);
      })
      .addCase(reviewAction.pending, (state) => {
        state.isReviewLoading = true;
      })
      .addCase(reviewAction.rejected, (state) => {
        state.isReviewLoading = false;
      })
      .addCase(reviewAction.fulfilled, (state, action) => {
        const newReviews = action.payload;
        state.reviews = newReviews.sort((a, b) => Date.parse(b.date) - Date.parse(a.date)).filter((_, index) => index < 10);
        state.isReviewLoading = false;
      });
  }
});
