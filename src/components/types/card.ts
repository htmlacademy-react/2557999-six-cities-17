export type Card = {
    isPremium: boolean;
    isFavorite: boolean;
    name: string;
    type: string;
    img: string;
    price: number;
    rating: number;
    cardType: "cities__card" | "favorites__card";
    city: string;
    }
