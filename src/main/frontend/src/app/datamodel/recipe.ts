import { Ingredient } from "./ingredient";

export interface Recipe {
    id: string;
    caption: string;
    description: string;
    ingredients: Ingredient[];
}