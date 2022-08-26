import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {UserData} from '../../../../types/user-data';
import {useAppDispatch, useAppSelector} from '../../../../hooks';
import {getFavoriteOffers} from '../../../../store/favorite-offers-data/selectors';
import {fetchFavoriteOffersAction} from '../../../../store/api-actions';

type HeaderLinkProps = {
  user: UserData;
}

function HeaderLink(props: HeaderLinkProps): JSX.Element {
  const {user} = props;
  const {avatarUrl, email} = user;
  const favoriteOffers = useAppSelector(getFavoriteOffers);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFavoriteOffersAction());
  }, [dispatch]);

  return (
    <Link
      to="/favorites"
      className="header__nav-link header__nav-link--profile"
    >
      <div className="header__avatar-wrapper user__avatar-wrapper">
        {avatarUrl && (
          <img src={avatarUrl} alt="user avatar"/>
        )}
      </div>
      {email && (
        <span className="header__user-name user__name">{email}</span>
      )}
      <span className="header__favorite-count">{favoriteOffers.length}</span>
    </Link>
  );
}

export default HeaderLink;
