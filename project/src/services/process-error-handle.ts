import {store} from '../store';
import {setError} from '../store/error-process/error-process';

export const processErrorHandle = (message: string): void => {
  store.dispatch(setError(message));
};
