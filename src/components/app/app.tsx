import MainPage from '../pages/main-page/main-page';
import { CardSettings } from '../card/card-settings';

function App(): JSX.Element {
  return (
    <MainPage
      CardCount={CardSettings.CardCount}
      AllCards={CardSettings.AllCards}
    />
  );
}

export default App;
