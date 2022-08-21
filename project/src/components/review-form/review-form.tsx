import React, {ChangeEvent, FormEvent, useState} from 'react';
import RatingItem from '../rating-item/rating-item';
import {Review} from '../../types/review';
import {useAppSelector} from '../../hooks';
import {getReviewLoadingStatus} from '../../store/reviews-data/selectors';

const RatingData = [
  {
    value: 5,
    id: '5-stars',
    title: 'perfect',
  },
  {
    value: 4,
    id: '4-stars',
    title: 'good',
  },
  {
    value: 3,
    id: '3-stars',
    title: 'not bad',
  },
  {
    value: 2,
    id: '2-stars',
    title: 'badly',
  },
  {
    value: 1,
    id: '1-stars',
    title: 'terribly',
  }
];

type ReviewFormProps = {
  onSubmit: (payload: Pick<Review, 'comment' | 'rating'>, resetForm: () => void) => void;
};

const minReviewLength = 50;
const maxReviewLength = 300;

function ReviewForm(props: ReviewFormProps):JSX.Element {
  const {onSubmit} = props;

  const [userReview, setUserReview] = useState('');
  const [userRating, setUserRating] = useState(0);
  const isReviewLoading = useAppSelector(getReviewLoadingStatus);

  const resetForm = () => {
    setUserReview('');
    setUserRating(0);
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    onSubmit({comment: userReview, rating: userRating}, resetForm);
  };

  const isDisabled = userReview.length < minReviewLength || userReview.length > maxReviewLength || userRating < 1;

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {RatingData.map(({value, id, title}) => (
          <RatingItem
            value={value}
            id={id}
            title={title}
            onChange={() => setUserRating(value)}
            key={id}
            disabled={isReviewLoading}
            checked={userRating >= value}
          />
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={({target}: ChangeEvent<HTMLTextAreaElement>) => {setUserReview(target.value);}}
        disabled={isReviewLoading}
        value={userReview}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and
          describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isDisabled}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
