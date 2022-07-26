import {Offers} from '../types/offer';

export const offers: Offers = [
  {
    images: [
      {
        src: 'img/apartment-01.jpg'
      }, {
        src: 'img/apartment-02.jpg'
      }, {
        src: 'img/apartment-03.jpg'
      }, {
        src: 'img/apartment-small-03.jpg'
      }, {
        src: 'img/apartment-small-04.jpg'
      }, {
        src: 'img/studio-01.jpg'
      }
    ],
    title: 'Beautiful &amp; luxurious apartment at great location',
    description: 'description',
    isPremium: true,
    placeType: 'hotel',
    rating: 4.1,
    bedrooms: 4,
    maxGuests: 4,
    pricePerNight: 100,
    facilities: [
      'Wifi', 'Heating', 'Kitchen', 'Cable TV'
    ],
    isFavorite: false,
    host: {
      hostAvatar: 'img/avatar-angelina.jpg',
      hostName: 'Melissa',
      isPro: false
    },
    id: '1',
  },
  {
    images: [
      {
        src: 'img/apartment-02.jpg'
      }, {
        src: 'img/apartment-01.jpg'
      }, {
        src: 'img/apartment-03.jpg'
      }, {
        src: 'img/apartment-small-04.jpg'
      }, {
        src: 'img/apartment-small-03.jpg'
      }, {
        src: 'img/studio-01.jpg'
      }
    ],
    title: 'Nice, cozy, warm big bed apartment',
    description: 'description',
    isPremium: false,
    placeType: 'apartment',
    rating: 3.4,
    bedrooms: 3,
    maxGuests: 3,
    pricePerNight: 100,
    facilities: [
      'Wifi', 'Heating', 'Kitchen', 'Cable TV'
    ],
    isFavorite: true,
    host: {
      hostAvatar: 'img/avatar-angelina.jpg',
      hostName: 'Melissa',
      isPro: true
    },
    id: '2',
  },
  {
    images: [
      {
        src: 'img/apartment-03.jpg'
      }, {
        src: 'img/apartment-02.jpg'
      }, {
        src: 'img/apartment-01.jpg'
      }, {
        src: 'img/apartment-small-03.jpg'
      }, {
        src: 'img/apartment-small-04.jpg'
      }, {
        src: 'img/studio-01.jpg'
      }
    ],
    title: 'Canal View Prinsengracht',
    description: 'description',
    isPremium: false,
    placeType: 'house',
    rating: 4.9,
    bedrooms: 4,
    maxGuests: 4,
    pricePerNight: 142,
    facilities: [
      'Wifi', 'Heating', 'Kitchen', 'Cable TV'
    ],
    isFavorite: false,
    host: {
      hostAvatar: 'img/avatar-angelina.jpg',
      hostName: 'Melissa',
      isPro: false
    },
    id: '3',
  },
  {
    images: [
      {
        src: 'img/room.jpg'
      }, {
        src: 'img/apartment-02.jpg'
      }, {
        src: 'img/apartment-03.jpg'
      }, {
        src: 'img/apartment-small-03.jpg'
      }, {
        src: 'img/apartment-small-04.jpg'
      }, {
        src: 'img/studio-01.jpg'
      }
    ],
    title: 'Wood and stone place',
    description: 'description',
    isPremium: true,
    placeType: 'room',
    rating: 5,
    bedrooms: 4,
    maxGuests: 4,
    pricePerNight: 93,
    facilities: [
      'Wifi', 'Heating', 'Kitchen', 'Cable TV'
    ],
    isFavorite: true,
    host: {
      hostAvatar: 'img/avatar-angelina.jpg',
      hostName: 'Melissa',
      isPro: false
    },
    id: '4'
  },
];
