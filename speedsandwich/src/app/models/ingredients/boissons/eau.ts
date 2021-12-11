import { Boisson } from "./boisson";


export class Eau extends Boisson{
    constructor(){
        super();
        this.prix = 0.5;
        this.libelle = "Eau";
        this.count = 0;
        this.src = "image";
    }
}
