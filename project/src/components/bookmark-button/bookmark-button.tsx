import React from 'react';
import {changeOfferStatusAction, fetchOfferAction} from '../../store/api-actions';
import {AppRoute} from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {useNavigate} from 'react-router-dom';
import {getAuthorizationStatus} from '../../store/user-process/selectors';

type BookmarkButtonProps = {
  isFavorite?: boolean;
  classNamePrefix?: string;
  iconWidth: number;
  iconHeight: number;
  offerId: string;
}

function BookmarkButton(props: BookmarkButtonProps): JSX.Element {
  const {isFavorite, classNamePrefix, iconWidth, iconHeight, offerId} = props;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isAuth = (authorizationStatus === 'AUTH');

  const handleClick = () => {
    if (isAuth) {
      if (!isFavorite) {
        dispatch(changeOfferStatusAction([offerId, {isFavorite: true}]));
      } else {
        dispatch(changeOfferStatusAction([offerId, {isFavorite: false}]));
      }
      dispatch(fetchOfferAction(offerId));
    } else {
      navigate(AppRoute.Login);
    }
  };

  return (
    <button
      className={`${classNamePrefix ? `${classNamePrefix}__bookmark-button` : ''} button${isFavorite && classNamePrefix ? ` ${classNamePrefix}__bookmark-button--active` : ''}`}
      type="button"
      onClick={handleClick}
    >
      <svg
        className={`${classNamePrefix}__bookmark-icon`}
        width={iconWidth}
        height={iconHeight}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export default BookmarkButton;
