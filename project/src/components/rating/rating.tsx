import React from 'react';
import {getRatingInPercents} from '../../services/utils';

type RatingProps = {
  classNamePrefix?: string;
  rating: number;
}

function Rating(props: RatingProps):JSX.Element {
  const {classNamePrefix, rating} = props;
  const ratingInPercents = getRatingInPercents(Math.round(rating));

  return (
    <div
      className={`rating${classNamePrefix ? ` ${classNamePrefix}__rating` : ''}`}
    >
      <div
        className={`rating__stars${classNamePrefix ? ` ${classNamePrefix}__stars` : ''}`}
      >
        <span style={{width: `${ratingInPercents}%`}}></span>
        <span className="visually-hidden">Rating</span>
      </div>
    </div>
  );
}

export default Rating;
