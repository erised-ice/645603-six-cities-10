import React, {useEffect} from 'react';
import {Navigate, useParams} from 'react-router-dom';
import Header from '../../components/header/header';
import PlacesList from '../../components/places-list/places-list';
import ReviewForm from '../../components/review-form/review-form';
import {AppRoute} from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {Offer, Offers} from '../../types/offer';
import ReviewsList from '../../components/reviews-list/reviews-list';
import MapComponent from '../../components/map-component/map-component';
import {fetchOfferAction} from "../../store/api-actions";
import LoadingScreen from "../../components/loading-screen/loading-screen";

const reviews = [
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: '2022-08-08T19:07:11.112Z',
    id: 1,
    rating: 4,
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 1,
      isPro: true,
      name: 'Oliver.conner'
    }
  },
  {
    comment: 'A second quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: '2022-09-08T19:07:11.112Z',
    id: 2,
    rating: 5,
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 2,
      isPro: false,
      name: 'OliverTest.conner'
    }
  }
];

const offersNearby: Offers = [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: 'Amsterdam'
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: [
      'Heating'
    ],
    host: {
      avatarUrl: 'img/apartment-02.jpg',
      id: 3,
      isPro: true,
      name: 'Angelina'
    },
    id: 1,
    images: [
      'img/2.png'
    ],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: 'img/apartment-02.jpg',
    price: 120,
    rating: 4.8,
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment'
  },
  {
    bedrooms: 4,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: 'Amsterdam'
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: [
      'Heating'
    ],
    host: {
      avatarUrl: 'img/apartment-01.jpg',
      id: 3,
      isPro: true,
      name: 'Angelina'
    },
    id: 1,
    images: [
      'img/apartment-01.jpg'
    ],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.35545638497378,
      longitude: 4.673877456499748,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: 'img/apartment-01.jpg',
    price: 320,
    rating: 4.8,
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment'
  }
];

function PropertyScreen(): JSX.Element {
  const params = useParams();
  const dispatch = useAppDispatch();
  const {offer} = useAppSelector((state) => state);

  useEffect(() => {
    dispatch(fetchOfferAction(params.id as string))
  }, []);

  if (!offer) {
    return <LoadingScreen />
  }
  const {city, images, title, isFavorite, isPremium, rating, type, bedrooms, maxAdults, price, goods, description, host} = offer;

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
                  <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                  {reviews.length > 0 ? <ReviewsList reviews={reviews}/> : null}
                  <ReviewForm />
                </section>
              </div>
            </div>
            <section className="property__map map">
              <MapComponent city={city} offers={offersNearby}/>
            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <PlacesList
                offers={offersNearby}
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
