import { Boisson } from "./boisson";


export class SodaOrange extends Boisson{
    constructor(){
        super();
        this.prix = 0.5;
        this.libelle = "Soda à l'orange";
        this.count = 0;
        this.src = "image";
    }
}
