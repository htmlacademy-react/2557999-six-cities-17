import React from 'react';
import PlaceCard from '../card/card';
import { Card } from '../types/card';

type OffersListProps = {
  cards: Card[];
  onCardHover?: (cardId: string | null) => void;
};

const OffersList: React.FC<OffersListProps> = ({ cards, onCardHover }) => (
  <div className="cities__places-list places__list tabs__content">
    {cards.map((card) => (
      <PlaceCard key={card.id} card={card} onCardHover={onCardHover} />
    ))}
  </div>
);

export default OffersList;
