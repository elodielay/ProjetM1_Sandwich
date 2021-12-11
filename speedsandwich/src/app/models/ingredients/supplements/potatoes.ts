import { Supplements } from "./supplements";

export class Potatoes extends Supplements{
    constructor(){
        super();
        this.prix = 0.5;
        this.libelle = "Potatoes";
        this.count = 0;
        this.src = "image";
    }
}
