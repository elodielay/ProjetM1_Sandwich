import { Sauce } from "./sauce";

export class Mayonnaise extends Sauce{
    constructor(){
        super();
        this.prix = 0.5;
        this.libelle = "Mayonnaise";
        this.count = 0;
        this.src = "image";
    }
}
