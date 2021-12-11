import { Fromage } from "./fromage";

export class Cheddar extends Fromage{
    constructor(){
        super();
        this.libelle = "Cheddar"
        this.prix = 0.5;
        this.src = "image";
    }
}