import { Supplements } from "./supplements";

export class Potatoes extends Supplements{
    constructor(){
        super();
        this.prix = 0.5;
        this.libelle = "Potatoes";
        this.count = 0;
        this.src = "https://cdn.pixabay.com/photo/2019/06/19/15/16/fried-potatoes-4285107_1280.jpg";
    }
}
