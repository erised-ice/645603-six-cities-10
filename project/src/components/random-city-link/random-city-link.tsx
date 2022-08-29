import React from 'react';
import {Link} from 'react-router-dom';
import {LOCATIONS} from '../../const';
import {getRandomInteger} from '../../utils';

const cityId = getRandomInteger(0, LOCATIONS.length - 1);
const city = LOCATIONS[cityId];

function RandomCityLink() {
  return (
    <div className="locations__item">
      <Link
        to={`/${city}`}
        className="locations__item-link"
      >
        <span>{city}</span>
      </Link>
    </div>
  );
}

export default RandomCityLink;
