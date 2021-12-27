import { Boisson } from "./boisson";


export class SodaOrange extends Boisson{
    constructor(){
        super();
        this.prix = 0.5;
        this.libelle = "Soda à l'orange";
        this.count = 0;
        this.src = "https://cdn.pixabay.com/photo/2013/03/01/18/48/aluminum-87987_1280.jpg";
    }
}
