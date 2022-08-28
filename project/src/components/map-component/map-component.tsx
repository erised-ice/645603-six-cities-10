import React, {memo, useEffect, useRef} from 'react';
import {Icon, LayerGroup, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import {City, Offer, Offers} from '../../types/offer';
import {URL_MARKER_CURRENT, URL_MARKER_DEFAULT} from '../../const';

type MapProps = {
  city: City;
  offers: Offers;
  selectedOffer?: Offer | null;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [13.5, 19.5]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [13.5, 19.5]
});

function MapComponent(props: MapProps): JSX.Element {
  const {city, offers, selectedOffer} = props;
  const layersRef = useRef<LayerGroup | null>(null);

  const mapRef = useRef<HTMLDivElement | null>(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      if (layersRef.current) {
        layersRef.current.clearLayers();
      }

      layersRef.current = new LayerGroup();

      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        if (layersRef.current) {
          marker
            .setIcon(
              selectedOffer !== undefined && offer.id === selectedOffer?.id
                ? currentCustomIcon
                : defaultCustomIcon
            )
            .addTo(layersRef.current);
        }
      });

      layersRef.current.addTo(map);
    }
  }, [map, offers, selectedOffer]);

  useEffect(() => {
    if (map) {
      map.flyTo({lat: city.location.latitude, lng: city.location.longitude}, city.location.zoom);
    }
  }, [map, city]);

  return (
    <div
      style={{height: '100%'}}
      ref={mapRef}
    >
    </div>
  );
}

export default memo(MapComponent);
