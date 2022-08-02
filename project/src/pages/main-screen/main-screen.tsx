import React, {useEffect} from 'react';
import Header from '../../components/header/header';
import PlacesList from '../../components/places-list/places-list';
import MapComponent from '../../components/map-component/map-component';
import {CITY} from '../../mocks/offers';
import {LOCATIONS} from '../../const';
import LocationsList from '../../components/locations-list/locations-list';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getOffers} from '../../store/action';

function MainScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const {city, offers} = useAppSelector((state) => state);
  const currentOffers = offers.filter((offer) => offer.city === city);
  const placesCount = currentOffers.length;

  useEffect(() => {
    dispatch(getOffers());
  }, [dispatch]);

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationsList locations={LOCATIONS} />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{placesCount} places to stay in {city}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                </ul>
              </form>
              <PlacesList
                offers={currentOffers}
                className="cities__places-list tabs__content"
                placeCardClassNamePrefix='cities'
              />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <MapComponent city={CITY} offers={currentOffers}/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
