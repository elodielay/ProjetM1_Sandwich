import { Ingredient} from './ingredient.model';

export class Sandwich {
    constructor(
        public nomSandwich: string, 
        public img : string, 
        public prixSandwich: number, 
        public ingredients?:Ingredient[]
    )
    {}
}