export type Image = {
  src: string;
};

export type Host = {
  hostAvatar: string;
  hostName: string;
  isPro: boolean;
};

export type Offer = {
  images: Image[];
  title: string;
  description: string;
  isPremium: boolean;
  placeType: string;
  rating: number;
  bedrooms: number;
  maxGuests: number;
  pricePerNight: number;
  facilities: string[];
  isFavorite: boolean;
  host: Host;
  id: string;
};

export type Offers = Offer[];
