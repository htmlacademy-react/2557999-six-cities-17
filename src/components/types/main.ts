export type MainPageProps = {
    cardCount: number;
    allCards: number;
    currentCity: string;
    onCityChange: (city: string) => void;
}
