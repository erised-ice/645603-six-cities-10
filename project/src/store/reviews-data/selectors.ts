import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {Reviews} from '../../types/review';

export const getReviewLoadingStatus = (state: State): boolean => state[NameSpace.Reviews].isReviewLoading;
export const getReviews = (state: State): Reviews => state[NameSpace.Reviews].reviews;
