import React from 'react';
import {Review} from '../../types/review';
import Rating from '../rating/rating';

type ReviewCardProps = {
  review: Review;
}

function ReviewCard(props: ReviewCardProps): JSX.Element {
  const {review} = props;
  const {comment, user, rating, date} = review;
  const {avatarUrl, isPro, name} = user;
  const humanDate = new Date(date).toLocaleString('en-us',{month:'long', year:'numeric'});

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className={`reviews__avatar-wrapper user__avatar-wrapper${isPro ? '  user__avatar-wrapper--pro' : ''}`}>
          <img
            className="reviews__avatar user__avatar"
            src={avatarUrl}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <Rating rating={rating} classNamePrefix="reviews" />
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date}>{humanDate}</time>
      </div>
    </li>
  );
}

export default ReviewCard;
