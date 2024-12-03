import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { allCards } from '../offer-page/offer-page';
import MainPage from '../pages/main-page/main-page';
import NotFoundPage from '../not-found-page/not-found-page';

function App(): JSX.Element {
  const [currentCity, setCurrentCity] = useState<string>('Amsterdam');

  const onCityChange = (city: string) => {
    setCurrentCity(city);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainPage
              cardCount={allCards.length} // Переходите от числа к количеству карточек
              allCards={allCards} // Передаем массив allCards
              currentCity={currentCity}
              onCityChange={onCityChange}
            />
          }
        />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
