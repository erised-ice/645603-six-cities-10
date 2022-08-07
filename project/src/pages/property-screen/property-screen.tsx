import React from 'react';
import {Navigate, useParams} from 'react-router-dom';
import ReviewCard from '../../components/review-card/review-card';
import Header from '../../components/header/header';
import PlacesList from '../../components/places-list/places-list';
import ReviewForm from '../../components/review-form/review-form';
import {AppRoute} from '../../const';
import {useAppSelector} from '../../hooks';
import {Offer} from '../../types/offer';

function PropertyScreen(): JSX.Element {
  const params = useParams();
  const {offers} = useAppSelector((state) => state);
  const offer = offers.find((item) => item.id.toString() === params.id) as Offer;
  const {images, title, isFavorite, isPremium, rating, type, bedrooms, maxAdults, price, goods, description, host} = offer;
  const {name, isPro, avatarUrl} = host;

  return (
    <div className="page">
      <Header />
      {offer ? (
        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {/*TODO: should be not more 6 img*/}
                {images.map((item) => (
                  <div
                    key={item}
                    className="property__image-wrapper"
                  >
                    <img
                      className="property__image"
                      src={item}
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {isPremium ? (
                  <div className="property__mark">
                    <span>Premium</span>
                  </div>
                ) : null}
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {title}
                  </h1>
                  <button className={`property__bookmark-button button${isFavorite ? ' property__bookmark-button--active' : ''}`} type="button">
                    <svg className="property__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                {/*TODO: count rating width*/}
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: '80%'}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {bedrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {maxAdults} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {goods.map((good) => (
                      <li
                        className="property__inside-item"
                        key={good}
                      >
                        {good}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className={`property__avatar-wrapper${isPro ? ' property__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
                      <img className="property__avatar user__avatar" src={avatarUrl} width="74" height="74" alt="Host avatar"/>
                    </div>
                    <span className="property__user-name">
                      {name}
                    </span>
                    {isPro ? (
                      <span className="property__user-status">
                        Pro
                      </span>
                    ) : null}
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {description}
                    </p>
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
                  <ul className="reviews__list">
                    <ReviewCard />
                  </ul>
                  <ReviewForm />
                </section>
              </div>
            </div>
            <section className="property__map map"></section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <PlacesList
                offers={offers}
                className="near-places__list"
                placeCardClassNamePrefix="near-places"
              />
            </section>
          </div>
        </main>
      ) : <Navigate to={AppRoute.NotFound} replace/>}
    </div>
  );
}

export default PropertyScreen;
