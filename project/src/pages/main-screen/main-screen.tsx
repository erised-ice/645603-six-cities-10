import React, {memo, useCallback, useEffect, useMemo, useState} from 'react';
import Header from '../../components/header/header';
import PlacesList from '../../components/places-list/places-list';
import MapComponent from '../../components/map-component/map-component';
import {LOCATIONS} from '../../const';
import LocationsList from '../../components/locations-list/locations-list';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {Offer, Offers} from '../../types/offer';
import SortComponent from '../../components/sort-component/sort-component';
import {sortOfferPriceHighToLow, sortOfferPriceLowToHigh, sortOffersByRating} from '../../services/sort';
import {fetchOffersAction} from '../../store/api-actions';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import {filterOffers, getCity} from '../../store/city-process/selectors';
import {getDataLoadedStatus} from '../../store/offers-data/selectors';

function MainScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const city = useAppSelector(getCity);
  const isDataLoaded = useAppSelector(getDataLoadedStatus);
  const currentOffers = useAppSelector(filterOffers);
  const popularOffers = currentOffers.slice();
  const placesCount = currentOffers.length;

  const [activeCard, setActiveCard] = useState<Offer | null>(null);
  const [activeOption, setActiveOption] = useState('popular');

  const getSortedOffers = useCallback((option:string) => {
    switch (option) {
      case 'popular':
        return popularOffers;
      case 'cheap':
        return currentOffers.sort(sortOfferPriceLowToHigh);
      case 'expensive':
        return currentOffers.sort(sortOfferPriceHighToLow);
      case 'top':
        return currentOffers.sort(sortOffersByRating);
    }
  }, [currentOffers]);

  const sortedOffers = useMemo(() => getSortedOffers(activeOption), [activeOption, getSortedOffers]);

  useEffect(() => {
    dispatch(fetchOffersAction());
  }, [dispatch]);

  if (isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className={`page__main page__main--index${placesCount === 0 ? ' page__main--index-empty' : ''}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationsList locations={LOCATIONS} />
          </section>
        </div>
        <div className="cities">
          <div className={`cities__places-container container${placesCount === 0 ? ' cities__places-container--empty' : ''}`}>
            {placesCount > 0 ? (
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{placesCount} places to stay in {city}</b>
                <SortComponent
                  onMouseClick={setActiveOption}
                />
                <PlacesList
                  offers={sortedOffers as Offers}
                  className="cities__places-list tabs__content"
                  placeCardClassNamePrefix='cities'
                  onMouseOver={setActiveCard}
                  onMouseOut={() => setActiveCard(null)}
                />
              </section>
            ) : (
              <section className="cities__no-places">
                <div className="cities__status-wrapper tabs__content">
                  <b className="cities__status">No places to stay available</b>
                  <p className="cities__status-description">We could not find any property available at the moment in
                    Dusseldorf
                  </p>
                </div>
              </section>
            )}
            <div className="cities__right-section">
              {placesCount > 0 ? (
                <section className="cities__map map">
                  <MapComponent
                    city={currentOffers[0].city}
                    offers={currentOffers}
                    selectedOffer={activeCard}
                  />
                </section>
              ) : null}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default memo(MainScreen);
