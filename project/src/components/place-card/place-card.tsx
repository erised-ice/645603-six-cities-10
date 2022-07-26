import React, {MouseEventHandler} from 'react';
import {Offer} from '../../types/offer';
import {Link} from 'react-router-dom';

type PlaceCardProps = {
  classNamePrefix?: string;
  offer: Offer;
  onMouseOver?: MouseEventHandler<HTMLElement>;
}

function PlaceCard(props: PlaceCardProps): JSX.Element {
  const {offer, classNamePrefix, onMouseOver} = props;
  const {images, isPremium, pricePerNight, title, placeType, isFavorite, id} = offer;

  return (
    <article className={`place-card${classNamePrefix ? ` ${classNamePrefix}__card` : ''}`} onMouseOver={onMouseOver}>
      {isPremium ? (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      ) : null}
      <div className={`place-card__image-wrapper${classNamePrefix ? ` ${classNamePrefix}__image-wrapper` : ''}`}>
        <a href="/#">
          <img className="place-card__image" src={images[0].src} width="260" height="200" alt="Place"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{pricePerNight}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button${isFavorite ? ' place-card__bookmark-button--active' : ''}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            {/*TODO: rating calc*/}
            <span style={{width: '80%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{placeType}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
