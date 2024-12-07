import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import OfferPage from '../offer-page/offer-page';
import { allCards } from '../mock/cards';
import { LoginPage } from '../pages/login-page/login';
import MainPage from '../pages/main-page/main-page';
import NotFoundPage from '../not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import FavoritesPage from '../pages/favorites-page/favorites-page';

function App(): JSX.Element {
  const [currentCity, setCurrentCity] = useState<string>('Amsterdam');
  const isAuthorized = false; // Пока что всегда считаем, что пользак не авторизован

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
              cardCount={allCards.length}
              allCards={allCards}
              currentCity={currentCity}
              onCityChange={onCityChange}
            />
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/favorites"
          element={
            <PrivateRoute isAuthorized={isAuthorized}>
              <FavoritesPage />
            </PrivateRoute>
          }
        />
        <Route path="/offer/:id" element={<OfferPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
