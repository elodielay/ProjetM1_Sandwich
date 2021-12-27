import { Fromage } from "./fromage";

export class Cheddar extends Fromage{
    constructor(){
        super();
        this.libelle = "Cheddar"
        this.prix = 0.5;
        this.src = "https://cdn.pixabay.com/photo/2010/12/16/12/09/keens-cheddar-3514_1280.jpg";
    }
}