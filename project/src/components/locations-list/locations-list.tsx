import React from 'react';
import LocationsItem from '../locations-item/locations-item';
import {Locations} from '../../types/offer';
import {useAppDispatch} from '../../hooks';
import {setCity} from '../../store/city-process/city-process';

type LocationsListProps = {
  locations: Locations;
}

function LocationsList(props: LocationsListProps): JSX.Element {
  const {locations} = props;
  const dispatch = useAppDispatch();

  return (
    <ul className="locations__list tabs__list">
      {locations.map((locationItem) => (
        <LocationsItem
          location={locationItem}
          isTabsItem
          key={locationItem}
          onClick={() => {
            dispatch(setCity(locationItem));
          }}
        />
      ))}
    </ul>
  );
}

export default LocationsList;
