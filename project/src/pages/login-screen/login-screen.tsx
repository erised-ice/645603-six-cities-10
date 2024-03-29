import React, {FormEvent, useRef} from 'react';
import Header from '../../components/header/header';
import {useAppDispatch} from '../../hooks';
import {AuthData} from '../../types/auth-data';
import {loginAction} from '../../store/api-actions';
import {emailRegExp, passwordRegExp} from '../../const';
import {setError} from '../../store/error-process/error-process';
import RandomCityLink from '../../components/random-city-link/random-city-link';

function LoginScreen(): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      const isEmailValid = emailRegExp.test(loginRef.current.value);
      const isPasswordValid = passwordRegExp.test(passwordRef.current.value);

      if (isEmailValid && isPasswordValid) {
        onSubmit({
          login: loginRef.current.value,
          password: passwordRef.current.value,
        });
      } else {
        dispatch(setError('Check email and password please, password should contain one letter and one digit'));
      }
    }
  };

  return (
    <div className="page page--gray page--login">
      <Header withNav={false}/>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action=""
              onSubmit={handleSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  ref={loginRef}
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  ref={passwordRef}
                  min="2"
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <RandomCityLink />
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginScreen;
