import React, {ChangeEventHandler} from 'react';

type RatingItemProps = {
  value: number;
  id: string;
  title: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  disabled: boolean;
  checked: boolean;
}

function RatingItem(props: RatingItemProps):JSX.Element {
  const {value, id, title, onChange, disabled, checked} = props;

  return (
    <>
      <input
        className={`form__rating-input visually-hidden${checked ? ' form__rating-input--checked' : ''}`}
        name="rating"
        value={value}
        id={id}
        type="radio"
        onChange={onChange}
        disabled={disabled}
      />
      <label htmlFor={id} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

export default RatingItem;
