import React, {useEffect} from 'react';
import {Navigate, useParams} from 'react-router-dom';
import Header from '../../components/header/header';
import PlacesList from '../../components/places-list/places-list';
import ReviewForm from '../../components/review-form/review-form';
import {AppRoute} from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks';
import ReviewsList from '../../components/reviews-list/reviews-list';
import MapComponent from '../../components/map-component/map-component';
import {
  fetchNearbyOffersAction,
  fetchOfferAction,
  fetchReviewsAction,
  reviewAction
} from '../../store/api-actions';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import Rating from '../../components/rating/rating';
import {Review} from '../../types/review';
import BookmarkButton from '../../components/bookmark-button/bookmark-button';
import HostCard from '../../components/host-card/host-card';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import {getOffer} from '../../store/offer-data/selectors';
import {getNearbyOffers} from '../../store/nearby-offers-data/selectors';
import {getReviews} from '../../store/reviews-data/selectors';
import {Offers} from '../../types/offer';

function PropertyScreen(): JSX.Element {
  const params = useParams();
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const offer = useAppSelector(getOffer);
  const nearbyOffers = useAppSelector(getNearbyOffers);
  const reviews = useAppSelector(getReviews);

  const isAuth = (authorizationStatus === 'AUTH');
  const mapOffers = [...nearbyOffers, offer] as Offers;

  const onReviewSubmit = (payload: Pick<Review, 'comment' | 'rating'>, callback: () => void) => {
    dispatch(reviewAction([params.id as string, payload, callback]));
  };

  useEffect(() => {
    dispatch(fetchOfferAction(params.id as string));
  }, [dispatch, params.id]);

  useEffect(() => {
    dispatch(fetchNearbyOffersAction(params.id as string));
  }, [dispatch, params.id]);

  useEffect(() => {
    dispatch(fetchReviewsAction(params.id as string));
  }, [dispatch, params.id]);

  if (!offer || !nearbyOffers || !reviews) {
    return <LoadingScreen />;
  }

  const {
    city,
    images,
    title,
    isFavorite,
    isPremium,
    rating,
    type,
    bedrooms,
    maxAdults,
    price,
    goods,
    description,
    host,
  } = offer;

  return (
    <div className="page">
      <Header />
      {offer ? (
        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {images.filter((_, index) => index <= 5).map((item) => (
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
                  <BookmarkButton
                    classNamePrefix="property"
                    isFavorite={isFavorite}
                    iconWidth={31}
                    iconHeight={33}
                    offerId={params.id as string}
                  />
                </div>
                <Rating rating={rating} classNamePrefix="property" />
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
                <HostCard
                  host={host}
                  description={description}
                />
                <section className="property__reviews reviews">
                  <h2 className="reviews__title">
                    Reviews &middot;
                    <span className="reviews__amount">
                      {reviews.length}
                    </span>
                  </h2>
                  {reviews.length > 0 ? <ReviewsList reviews={reviews}/> : null}
                  {isAuth ? <ReviewForm onSubmit={onReviewSubmit}/> : null}
                </section>
              </div>
            </div>
            <section className="property__map map">
              <MapComponent city={city} offers={mapOffers} selectedOffer={offer}/>
            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <PlacesList
                offers={nearbyOffers}
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
