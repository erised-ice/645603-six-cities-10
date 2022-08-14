import React from 'react';
import Logo from '../logo/logo';
import {Link} from 'react-router-dom';
import {logoutAction} from '../../store/api-actions';
import {useAppDispatch, useAppSelector} from '../../hooks';

type HeaderProps = {
  withNav?: boolean;
}

function Header({withNav = true}: HeaderProps): JSX.Element {
  const dispatch = useAppDispatch();
  const {authorizationStatus, user} = useAppSelector((state) => state);
  const isAuth = (authorizationStatus === 'AUTH' && user);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          {withNav && (
            <nav className="header__nav">
              <ul className="header__nav-list">
                {isAuth ? (
                  <>
                    <li className="header__nav-item user">
                      <a className="header__nav-link header__nav-link--profile" href="/#">
                        <div className="header__avatar-wrapper user__avatar-wrapper">
                          {user && user.avatarUrl ? (
                            <img src={user.avatarUrl} alt="user avatar"/>
                          ) : null}
                        </div>
                        {user ? (
                          <span className="header__user-name user__name">{user.email}</span>
                        ) : null}
                        <span className="header__favorite-count">3</span>
                      </a>
                    </li>
                    <li className="header__nav-item">
                      <Link
                        className="header__nav-link"
                        onClick={(evt) => {
                          evt.preventDefault();
                          dispatch(logoutAction());
                        }}
                        to="/login"
                      >
                        <span className="header__signout">Sign out</span>
                      </Link>
                    </li>
                  </>
                ) : (
                  <li className="header__nav-item user">
                    <Link
                      className="header__nav-link header__nav-link--profile"
                      to="/login"
                    >
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__login">Sign in</span>
                    </Link>
                  </li>
                )}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
