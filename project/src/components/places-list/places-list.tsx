import React from 'react';
import {Offer, Offers} from '../../types/offer';
import PlaceCard from '../place-card/place-card';

type PlacesListProps = {
  className?: string;
  placeCardClassNamePrefix: string;
  offers: Offers;
  onMouseOver?: (offer:Offer) => void;
}

function PlacesList(props: PlacesListProps):JSX.Element {
  const {className, placeCardClassNamePrefix, offers, onMouseOver} = props;

  return (
    <div className={`places__list${className ? ` ${className}` : ''}`}>
      {offers.map((item) =>
        (
          <PlaceCard
            classNamePrefix={placeCardClassNamePrefix}
            offer={item}
            key={item.id}
            onMouseOver={() => onMouseOver ? onMouseOver(item) : Function.prototype}
          />))}
    </div>
  );
}

export default PlacesList;
