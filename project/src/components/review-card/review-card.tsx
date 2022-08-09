import React from 'react';
import {Review} from '../../types/review';

type ReviewCardProps = {
  review: Review;
}

function ReviewCard(props: ReviewCardProps): JSX.Element {
  const {review} = props;
  const {comment, user} = review;
  const {avatarUrl, isPro, name} = user;

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
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            {/*TODO: rating*/}
            <span style={{width: '80%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        {/* TODO: date - do I need use some library? No, I can do it without library */}
        <time className="reviews__time" dateTime="2019-04-24">April 2019</time>
      </div>
    </li>
  );
}

export default ReviewCard;
