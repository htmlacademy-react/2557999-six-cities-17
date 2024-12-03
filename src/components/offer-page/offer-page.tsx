import React from 'react';
import { Card } from '../types/card';
import PlaceCard from '../card/card';

export const allCards: Card[] = [
  {
    isPremium: true,
    isFavorite: false,
    name: 'Beautiful apartment in Paris',
    type: 'Apartment',
    img: 'img/apartment-01.jpg',
    price: 120,
    rating: 4.5,
    cardType: 'cities__card',
    city: 'Paris',
  },
  {
    isPremium: false,
    isFavorite: true,
    name: 'Cozy studio in Cologne',
    type: 'Studio',
    img: 'img/studio-01.jpg',
    price: 80,
    rating: 4.2,
    cardType: 'cities__card',
    city: 'Cologne',
  },
  {
    isPremium: false,
    isFavorite: true,
    name: 'Canal View Prinsengracht',
    type: 'Apartment',
    img: 'img/apartment-02.jpg',
    price: 80,
    rating: 4.2,
    cardType: 'cities__card',
    city: 'Amsterdam',
  },
  {
    isPremium: true,
    isFavorite: false,
    name: 'Nice, cozy, warm big bed apartment',
    type: 'Studio',
    img: 'img/apartment-03.jpg',
    price: 180,
    rating: 5,
    cardType: 'cities__card',
    city: 'Amsterdam',
  },
];

const OfferPage: React.FC = () => (
  <main className="page__main page__main--offer">
    <section className="offer">
      <h1 className="offer__title">Available Offers</h1>
      <div className="offer__list">
        {allCards.map((offer) => (
          <PlaceCard key={offer.name} card={offer} />
        ))}
      </div>
    </section>
  </main>
);

export default OfferPage;
