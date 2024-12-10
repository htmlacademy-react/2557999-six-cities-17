import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import OfferPage from '../offer-page/offer-page';
import { allCards } from '../mocks/offers';
import { LoginPage } from '../pages/login-page/login';
import MainPage from '../pages/main-page/main-page';
import NotFoundPage from '../not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import Favorites from '../pages/favorites-page/favorites-page';

function App(): JSX.Element {
  const [currentCity, setCurrentCity] = useState<string>('Amsterdam');
  const isAuthorized = true;

  const onCityChange = (city: string) => {
    setCurrentCity(city);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/Main"
          element={
            <MainPage
              allCards={allCards}
              currentCity={currentCity}
              onCityChange={onCityChange}
              cardCount={0}
            />
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/favorites"
          element={
            <PrivateRoute isAuthorized={isAuthorized}>
              <Favorites cards={allCards} />
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
