import PlaceCard from '../../card/card';
import Header from '../../header/header';
import { City } from '../../types/city';
import { MainPageProps } from '../../types/main';

function MainPage({
  allCards, // Здесь allCards передается как пропс
  currentCity,
  onCityChange,
}: MainPageProps): JSX.Element {
  if (!Array.isArray(allCards)) {
    return <div>Error: invalid data format for cards</div>;
  }

  const filteredCards = allCards.filter((card) => card.city === currentCity);

  return (
    <main className="page__main page__main--index">
      <Header />
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {City.map((cityName) => (
              <li key={cityName} className="locations__item">
                <a
                  className={`locations__item-link tabs__item ${
                    cityName === currentCity ? 'tabs__item--active' : ''
                  }`}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onCityChange(cityName);
                  }}
                >
                  <span>{cityName}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">
              {filteredCards.length} places to stay in {currentCity}
            </b>
            <div className="cities__places-list places__list tabs__content">
              {filteredCards.map((card) => (
                <PlaceCard key={card.name} card={card} />
              ))}
            </div>
          </section>
          <div className="cities__right-section">
            <section className="cities__map map" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainPage;
