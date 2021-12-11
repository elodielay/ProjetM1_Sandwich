import { Fromage } from "./fromage";

export class Emmental extends Fromage{
    constructor(){
        super();
        this.libelle = "Emmental"
        this.prix = 0.5;
        this.src = "image";
    }
}
