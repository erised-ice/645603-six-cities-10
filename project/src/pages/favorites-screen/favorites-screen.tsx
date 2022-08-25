import React from 'react';
import Header from '../../components/header/header';
import {useAppSelector} from '../../hooks';
import {getFavoriteOffers} from '../../store/favorite-offers-data/selectors';
import FavoritesListCityItem from '../../components/favorites-list-city-item/favorites-list-city-item';

function FavoritesScreen(): JSX.Element {
  const favoriteOffers = useAppSelector(getFavoriteOffers);
  const cities = favoriteOffers.map((item) => item.city.name);
  const uniqueCities = Array.from(new Set(cities));

  return (
    <div className={`page${favoriteOffers.length === 0 ? ' page--favorites-empty' : ''}`}>
      <Header />

      <main className={`page__main page__main--favorites${favoriteOffers.length === 0 ? ' page__main--favorites-empty' : ''}`}>
        <div className="page__favorites-container container">
          <section className={`favorites${favoriteOffers.length === 0 ? ' favorites--empty' : ''}`}>
            {favoriteOffers.length > 0 ? (
              <>
                <h1 className="favorites__title">Saved listing</h1>
                <ul className="favorites__list">
                  {uniqueCities.map((uniqueCity) => <FavoritesListCityItem key={uniqueCity} city={uniqueCity} offers={favoriteOffers.filter((offer) => offer.city.name === uniqueCity)}/>)}
                </ul>
              </>
            ) : (
              <>
                <h1 className="visually-hidden">Favorites (empty)</h1>
                <div className="favorites__status-wrapper">
                  <b className="favorites__status">Nothing yet saved.</b>
                  <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
                </div>
              </>
            )}
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </div>
  );
}

export default FavoritesScreen;
