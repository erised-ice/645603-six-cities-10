import React from 'react';
import PlaceCard from '../place-card/place-card';
import {Offers} from '../../types/offer';

type FavoritesListCityItemProps = {
  city: string;
  offers: Offers;
}

function FavoritesListCityItem(props: FavoritesListCityItemProps): JSX.Element {
  const {city, offers} = props;

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          {/*TODO: make link*/}
          <a className="locations__item-link" href="/#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((item) => <PlaceCard classNamePrefix='favorites' offer={item} key={item.id} imageWidth={150} imageHeight={110}/>)}
      </div>
    </li>
  );
}

export default FavoritesListCityItem;
