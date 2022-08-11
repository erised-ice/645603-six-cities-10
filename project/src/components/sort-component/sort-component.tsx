import React, {useState} from 'react';
import {options} from '../../services/sort';

type SortComponentProps = {
  onMouseClick: (option: string) => void;
}

function SortComponent(props: SortComponentProps):JSX.Element {
  const {onMouseClick} = props;
  const [isOpened, toggleSort] = useState(false);
  const [activeOption, setActiveOption] = useState('popular');

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by&nbsp;</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => toggleSort(!isOpened)}
      >
        {activeOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom${isOpened ? ' places__options--opened' : ''} `}>
        {options.map((option) => (
          <li
            onClick={() => {
              setActiveOption(option.name);
              onMouseClick(option.type);
              toggleSort(false);
            }}
            key={option.type}
            tabIndex={0}
            className={`places__option${option.type === activeOption ? ' places__option--active' : ''}`}
          >
            {option.name}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default SortComponent;
