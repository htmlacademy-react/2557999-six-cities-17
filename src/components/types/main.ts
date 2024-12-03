import { Card } from './card'; 

export type MainPageProps = {
    cardCount: number;
    allCards: Card[];
    currentCity: string;
    onCityChange: (city: string) => void;
}

