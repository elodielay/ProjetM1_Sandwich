import { Sauce } from "./sauce";

export class Ketchup extends Sauce{
    constructor(){
        super();
        this.prix = 0.5;
        this.libelle = "Ketchup";
        this.count = 0;
        this.src = "image";
    }
}
