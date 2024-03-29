import React, {memo, MouseEventHandler} from 'react';
import {Offer} from '../../types/offer';
import {Link} from 'react-router-dom';
import Rating from '../rating/rating';
import BookmarkButton from '../bookmark-button/bookmark-button';

type PlaceCardProps = {
  classNamePrefix?: string;
  offer: Offer;
  onMouseOver?: MouseEventHandler<HTMLElement>;
  onMouseOut?: MouseEventHandler<HTMLElement>;
  imageWidth?: number;
  imageHeight?: number;
}

function PlaceCard(props: PlaceCardProps): JSX.Element {
  const {offer, classNamePrefix, onMouseOver, onMouseOut, imageWidth, imageHeight} = props;
  const {previewImage, title, isFavorite, isPremium, type, price, id, rating} = offer;

  return (
    <article className={`place-card${classNamePrefix ? ` ${classNamePrefix}__card` : ''}`} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
      {isPremium ? (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      ) : null}
      <div className={`place-card__image-wrapper${classNamePrefix ? ` ${classNamePrefix}__image-wrapper` : ''}`}>
        <a href="/#">
          <img className="place-card__image" src={previewImage} width={`${imageWidth ? `${imageWidth}` : '260'}`} height={`${imageHeight ? `${imageHeight}` : '200'}`} alt="Place"/>
        </a>
      </div>
      <div className={`place-card__info${classNamePrefix ? ` ${classNamePrefix}__card-info` : ''}`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <BookmarkButton
            classNamePrefix="place-card"
            isFavorite={isFavorite}
            iconWidth={18}
            iconHeight={19}
            offerId={id.toString()}
          />
        </div>
        <Rating rating={rating} classNamePrefix="place-card" />
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default memo(PlaceCard);
