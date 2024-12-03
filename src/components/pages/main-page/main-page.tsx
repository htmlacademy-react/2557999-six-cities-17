import PlaceCard from '../../card/card';
import Header from '../../header/header';
import { City } from '../../types/city';
import { MainPageProps } from '../../types/main';

function MainPage({
  cardCount,
  allCards,
  currentCity,
  onCityChange,
}: MainPageProps): JSX.Element {
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
              {allCards} places to stay in {currentCity}
            </b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex={0}>
                Popular
                <svg className="places__sorting-arrow" width={7} height={4}>
                  <use xlinkHref="#icon-arrow-select" />
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li
                  className="places__option places__option--active"
                  tabIndex={0}
                >
                  Popular
                </li>
                <li className="places__option" tabIndex={0}>
                  Price: low to high
                </li>
                <li className="places__option" tabIndex={0}>
                  Price: high to low
                </li>
                <li className="places__option" tabIndex={0}>
                  Top rated first
                </li>
              </ul>
            </form>
            <div className="cities__places-list places__list tabs__content">
              {Array.from({ length: cardCount }, (_, index) => (
                <PlaceCard key={index} />
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
