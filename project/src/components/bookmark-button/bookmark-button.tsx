import React from 'react';

type BookmarkButtonProps = {
  isFavorite?: boolean;
  classNamePrefix?: string;
  iconWidth: number;
  iconHeight: number;
}

function BookmarkButton(props: BookmarkButtonProps): JSX.Element {
  const {isFavorite, classNamePrefix, iconWidth, iconHeight} = props;

  return (
    <button className={`${classNamePrefix ? `${classNamePrefix}__bookmark-button` : ''} button${isFavorite && classNamePrefix ? ` ${classNamePrefix}__bookmark-button--active` : ''}`} type="button">
      <svg className={`${classNamePrefix}__bookmark-icon`} width={iconWidth} height={iconHeight}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export default BookmarkButton;
