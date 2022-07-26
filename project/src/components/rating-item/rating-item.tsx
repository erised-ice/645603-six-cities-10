import React, {ChangeEventHandler} from 'react';

type RatingItemProps = {
  value: number;
  id: string;
  title: string;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined
}

function RatingItem(props: RatingItemProps):JSX.Element {
  const {value, id, title, onChange} = props;

  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={value}
        id={id}
        type="radio"
        onChange={onChange}
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
