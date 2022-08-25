export enum AppRoute {
  Login = '/login',
  Main = '/',
  Favorites = '/favorites',
  Room = '/offer',
  NotFound = '/not-found'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const URL_MARKER_DEFAULT = 'img/pin.svg';
export const URL_MARKER_CURRENT = 'img/pin-active.svg';

export const LOCATIONS = [
  'Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'
];

export const TIMEOUT_SHOW_ERROR = 2000;

export enum APIRoute {
  Offers = '/hotels',
  Reviews = '/comments',
  Login = '/login',
  Logout = '/logout',
  Favorite = '/favorite',
}

export enum NameSpace {
  User = 'USER',
  Offers = 'OFFERS',
  Offer = 'OFFER',
  NearbyOffers = 'NEARBY_OFFERS',
  FavoriteOffers = 'FAVORITE_OFFERS',
  Reviews = 'REVIEWS',
  Error = 'ERROR',
  City = 'CITY',
}

//eslint-disable-next-line
export const emailRegExp = /^(?![\w\.@]*\.\.)(?![\w\.@]*\.@)(?![\w\.]*@\.)\w+[\w\.]*@[\w\.]+\.\w{2,}$/;
//eslint-disable-next-line
export const passwordRegExp = /^(?=.*[0-9])(?=.*[a-z])|(?=.*[A-Z])(?!.* ).{2,}$/

