import React, {useState} from 'react';
import {Offers} from '../../types/offer';
import PlaceCard from '../place-card/place-card';

type PlacesListProps = {
  className?: string;
  placeCardClassNamePrefix: string;
  offers: Offers;
}

function PlacesList(props: PlacesListProps):JSX.Element {
  const {className, placeCardClassNamePrefix, offers} = props;

  const [activeCardId, setActiveCard] = useState('0');
  // eslint-disable-next-line
  console.log(activeCardId);

  return (
    <div className={`places__list${className ? ` ${className}` : ''}`}>
      {offers.map((item) => (
        <PlaceCard
          classNamePrefix={placeCardClassNamePrefix}
          offer={item}
          key={item.id}
          onMouseOver={() => setActiveCard(item.id)}
        />))}
    </div>
  );
}

export default PlacesList;
