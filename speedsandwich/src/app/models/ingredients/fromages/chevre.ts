import { Fromage } from "./fromage";

export class Chevre extends Fromage{
    constructor(){
        super();
        this.libelle = "Chevre"
        this.prix = 0.5;
        this.src = "image";
    }
}