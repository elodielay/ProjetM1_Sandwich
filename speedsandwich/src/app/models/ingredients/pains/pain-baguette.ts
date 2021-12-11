import { Pain } from "./pain";

export class PainBaguette extends Pain{
    constructor(){
        super();
        this.prix = 0.7;
        this.libelle = "Baguette";
        this.count = 1;
        this.src = "image";

    }
}
