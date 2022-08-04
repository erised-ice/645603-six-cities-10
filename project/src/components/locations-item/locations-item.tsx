import React, {MouseEventHandler} from 'react';

type LocationsItemProps = {
  isTabsItem?: boolean;
  location: string;
  isActive?: boolean;
  onClick?: MouseEventHandler<HTMLElement>;
}

function LocationsItem(props: LocationsItemProps): JSX.Element {
  const {isTabsItem, location, isActive, onClick} = props;

  return (
    <li className="locations__item">
      <a
        className={`locations__item-link${isTabsItem ? ' tabs__item' : ''}${isActive ? ' tabs__item--active' : ''}`} href="/#"
        onClick={onClick}
      >
        <span>{location}</span>
      </a>
    </li>
  );
}

export default LocationsItem;
