import { allCards } from '../../mocks/offers';
import Header from '../../header/header';

type FavoritesProps = {
  cards: typeof allCards;
};

export default function Favorites({ cards }: FavoritesProps): JSX.Element {
  const cities = [...new Set(cards.map((card) => card.city))];

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {cities.map((city) => {
                const cityCards = cards.filter((card) => card.city === city);
                return (
                  <li key={city} className="favorites__locations-items">
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <a className="locations__item-link" href="#">
                          <span>{city}</span>
                        </a>
                      </div>
                    </div>
                    <div className="favorites__places">
                      {cityCards.map((card) => (
                        <article
                          key={card.id}
                          className="favorites__card place-card"
                        >
                          {card.isPremium && (
                            <div className="place-card__mark">
                              <span>Premium</span>
                            </div>
                          )}
                          <div className="favorites__image-wrapper place-card__image-wrapper">
                            <a href="#">
                              <img
                                className="place-card__image"
                                src={card.img}
                                width={150}
                                height={110}
                                alt="Place image"
                              />
                            </a>
                          </div>
                          <div className="favorites__card-info place-card__info">
                            <div className="place-card__price-wrapper">
                              <div className="place-card__price">
                                <b className="place-card__price-value">
                                  €{card.price}
                                </b>
                                <span className="place-card__price-text">
                                  / night
                                </span>
                              </div>
                              <button
                                className="place-card__bookmark-button place-card__bookmark-button--active button"
                                type="button"
                              >
                                <svg
                                  className="place-card__bookmark-icon"
                                  width={18}
                                  height={19}
                                >
                                  <use xlinkHref="#icon-bookmark" />
                                </svg>
                                <span className="visually-hidden">
                                  In bookmarks
                                </span>
                              </button>
                            </div>
                            <div className="place-card__rating rating">
                              <div className="place-card__stars rating__stars">
                                <span
                                  style={{ width: `${card.rating * 20}%` }}
                                />
                                <span className="visually-hidden">Rating</span>
                              </div>
                            </div>
                            <h2 className="place-card__name">
                              <a href="#">{card.name}</a>
                            </h2>
                            <p className="place-card__type">{card.type}</p>
                          </div>
                        </article>
                      ))}
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}
