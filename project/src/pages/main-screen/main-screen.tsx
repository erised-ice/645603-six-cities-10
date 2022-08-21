import React, {useEffect, useState} from 'react';
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
import {getCity} from '../../store/city-process/selectors';
import {getDataLoadedStatus, getOffers} from '../../store/offers-data/selectors';

function MainScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const city = useAppSelector(getCity);
  const offers = useAppSelector(getOffers);
  const isDataLoaded = useAppSelector(getDataLoadedStatus);
  const currentOffers = offers.filter((offer) => offer.city.name === city);
  const placesCount = currentOffers.length;

  const [activeCard, setActiveCard] = useState<Offer | null>(null);
  const [activeOption, setActiveOption] = useState('popular');

  const getSortedOffers = (option:string) => {
    switch (option) {
      case 'popular':
        return currentOffers;
      case 'cheap':
        return currentOffers.sort(sortOfferPriceLowToHigh);
      case 'expensive':
        return currentOffers.sort(sortOfferPriceHighToLow);
      case 'top':
        return currentOffers.sort(sortOffersByRating);
    }
  };

  const sortedOffers = getSortedOffers(activeOption);

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
              <SortComponent
                onMouseClick={setActiveOption}
              />
              <PlacesList
                offers={sortedOffers as Offers}
                className="cities__places-list tabs__content"
                placeCardClassNamePrefix='cities'
                onMouseOver={setActiveCard}
              />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                {currentOffers.length > 0 ? (
                  <MapComponent
                    city={currentOffers[0].city}
                    offers={currentOffers}
                    selectedOffer={activeCard}
                  />
                ) : null}
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
