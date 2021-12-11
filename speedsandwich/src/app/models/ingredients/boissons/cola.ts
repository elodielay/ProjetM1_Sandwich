import { Boisson } from "./boisson";


export class Cola extends Boisson{
    constructor(){
        super();
        this.prix = 0.5;
        this.libelle = "Cola";
        this.count = 0;
        this.src = "image";
    }
}
