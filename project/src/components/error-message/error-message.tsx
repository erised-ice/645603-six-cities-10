import React, {useEffect} from 'react';
import {useAppSelector} from '../../hooks';
import './error-message.css';
import {getError} from '../../store/error-process/selectors';
import {useDispatch} from 'react-redux';
import {clearError} from '../../store/error-process/error-process';
import {TIMEOUT_SHOW_ERROR} from '../../const';

function ErrorMessage(): JSX.Element | null {
  const dispatch = useDispatch();

  const error = useAppSelector(getError);
  const delayedClearError = () => setTimeout(() => dispatch(clearError()), TIMEOUT_SHOW_ERROR);


  useEffect(() => {
    error && delayedClearError();
  }, [error, delayedClearError]);

  return (error)
    ? <div className='error-message'>{error}</div>
    : null;
}

export default ErrorMessage;
