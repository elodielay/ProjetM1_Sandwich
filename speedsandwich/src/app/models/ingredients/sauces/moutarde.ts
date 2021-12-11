import { Sauce } from "./sauce";

export class Moutarde extends Sauce{
    constructor(){
        super();
        this.prix = 0.5;
        this.libelle = "Moutarde";
        this.count = 0;
        this.src = "image";
    }
}
