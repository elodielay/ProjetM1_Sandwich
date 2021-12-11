import { Supplements } from "./supplements";

export class Frite extends Supplements{
    constructor(){
        super();
        this.prix = 0.5;
        this.libelle = "Frites";
        this.count = 0;
        this.src = "image";
    }
}
