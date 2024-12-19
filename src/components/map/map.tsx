import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Card } from '../types/card';

type MapProps = {
  offers: Card[];
};

const Map: React.FC<MapProps> = ({ offers }) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mapRef.current) {
      const map = L.map(mapRef.current, {
        center: [52.3676, 4.9041],
        zoom: 12,
      });

      L.tileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        }
      ).addTo(map);

      offers.forEach((offer) => {
        const { latitude, longitude } = offer.location;

        L.marker([latitude, longitude])
          .addTo(map)
          .bindPopup(
            `<b>${offer.name}</b><br>${offer.type}<br>Price: €${offer.price}`
          );
      });

      return () => {
        map.remove();
      };
    }
  }, [offers]);

  return <div style={{ height: '100%', width: '100%' }} ref={mapRef} />;
};

export default Map;
