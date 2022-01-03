import { Sauce } from "./sauce";

export class Mayonnaise extends Sauce{
    constructor(){
        super();
        this.price = 0.5;
        this.wording = "Mayonnaise";
        this.count = 0;
        this.src = "https://www.marciatack.fr/wp-content/uploads/2020/11/Mayonnaise-maison.jpg";
    }
}
