import React from 'react';
import PlaceCard from '../card/card';
import { Card } from '../types/card';
import { allCards } from '../mock/cards';
import { useParams } from 'react-router-dom';

const OfferPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const offer: Card | undefined = allCards.find((card) => card.id === id);

  if (!offer) {
    return (
      <main>
        <h1>Offer not found</h1>
      </main>
    );
  }

  return (
    <main>
      <h1>{offer.name}</h1>
      <PlaceCard card={offer} />
    </main>
  );
};

export default OfferPage;
