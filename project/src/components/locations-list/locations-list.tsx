import React, {memo, useEffect} from 'react';
import LocationsItem from '../locations-item/locations-item';
import {Locations} from '../../types/offer';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {setCity} from '../../store/city-process/city-process';
import {getCity} from '../../store/city-process/selectors';
import {useNavigate, useParams} from 'react-router-dom';
import {AppRoute, LOCATIONS} from '../../const';

type LocationsListProps = {
  locations: Locations;
}

function LocationsList(props: LocationsListProps): JSX.Element {
  const {locations} = props;
  const params = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const city = useAppSelector(getCity);

  useEffect(() => {
    if(params.city && LOCATIONS.find((item) => item === params.city) ) {
      dispatch(setCity(params.city as string));
    } else if (params.city) {
      navigate(AppRoute.NotFound);
    } else {
      dispatch(setCity('Paris'));
    }
  }, [dispatch, params.city, navigate]);

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
          isActive={locationItem === city}
        />
      ))}
    </ul>
  );
}

export default memo(LocationsList);
