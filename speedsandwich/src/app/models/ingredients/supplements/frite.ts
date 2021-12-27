import { Supplements } from "./supplements";

export class Frite extends Supplements{
    constructor(){
        super();
        this.prix = 0.5;
        this.libelle = "Frites";
        this.count = 0;
        this.src = "https://cdn.pixabay.com/photo/2016/11/20/09/06/bowl-1842294_1280.jpg";
    }
}
