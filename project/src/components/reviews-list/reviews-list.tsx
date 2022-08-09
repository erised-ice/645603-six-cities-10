import React from 'react';
import ReviewCard from '../review-card/review-card';
import {Reviews} from '../../types/review';

type ReviewsListProps = {
  reviews: Reviews;
}

function ReviewsList(props: ReviewsListProps):JSX.Element {
  const {reviews} = props;

  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <ReviewCard
          review={review}
          key={review.id}
        />
      ))}
    </ul>
  );
}

export default ReviewsList;
