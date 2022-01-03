import { Sauce } from "./sauce";

export class Mayonnaise extends Sauce{
    constructor(){
        super();
        this.prix = 0.5;
        this.libelle = "Mayonnaise";
        this.count = 0;
        this.src = "https://www.marciatack.fr/wp-content/uploads/2020/11/Mayonnaise-maison.jpg";
    }

    copy():Mayonnaise
    {
        const copy = new Mayonnaise();
        return copy;
    }
}
