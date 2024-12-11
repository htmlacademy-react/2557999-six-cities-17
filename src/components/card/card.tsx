import React from 'react';
import { Card } from '../types/card';
import { Link } from 'react-router-dom';

export type PlaceCardProps = {
  card: Card;
  onCardHover?: (cardId: string | null) => void;
};

export const PlaceCard: React.FC<PlaceCardProps> = ({ card, onCardHover }) => {
  const {
    cardType,
    isPremium,
    isFavorite,
    name,
    type,
    img,
    price,
    rating,
    id,
  } = card;

  const handleMouseEnter = () => {
    if (onCardHover) {
      onCardHover(id);
    }
  };

  const handleMouseLeave = () => {
    if (onCardHover) {
      onCardHover(null);
    }
  };

  return (
    <article
      className={`${cardType} place-card`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isPremium && <div className="place-card__mark">Premium</div>}
      {isFavorite && <div className="place-card__favorite"></div>}
      <div className={`${cardType}__image-wrapper place-card__image-wrapper`}>
        <Link to={`/offer/${id}`}>
          {' '}
          {}
          <img
            className="place-card__image"
            src={img}
            width="260"
            height="200"
            alt={name}
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/ night</span>
          </div>
        </div>
        <div className="place-card__rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${rating * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{name}</Link> {}
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

export default PlaceCard;
