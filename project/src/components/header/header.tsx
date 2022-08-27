import React, {memo, useMemo} from 'react';
import Logo from '../logo/logo';
import {Link} from 'react-router-dom';
import {logoutAction} from '../../store/api-actions';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getAuthorizationStatus, getUser} from '../../store/user-process/selectors';
import HeaderLink from './components/header-link/header-link';

type HeaderProps = {
  withNav?: boolean;
}

function Header({withNav = true}: HeaderProps): JSX.Element {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const user = useAppSelector(getUser);
  const isAuth = useMemo(() => authorizationStatus === 'AUTH' && user, [authorizationStatus, user]);

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
                {isAuth && user ? (
                  <>
                    <li className="header__nav-item user">
                      <HeaderLink user={user}/>
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

export default memo(Header);
