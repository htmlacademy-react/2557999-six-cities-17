import { useState } from 'react';
import MainPage from '../pages/main-page/main-page';

function App(): JSX.Element {
  const [currentCity, setCurrentCity] = useState<string>('Amsterdam');

  const onCityChange = (city: string) => {
    setCurrentCity(city);
  };

  return (
    <MainPage
      cardCount={5}
      allCards={25}
      currentCity={currentCity}
      onCityChange={onCityChange}
    />
  );
}

export default App;
