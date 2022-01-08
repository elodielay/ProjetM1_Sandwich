import { Meat } from "./meat";

export class PouletFrit extends Meat
{
    //override prix : number = 0;
    constructor()
    {
        super();
        this.price = 0.7;
        this.wording = "Poulet Frit";
        this.count = 0;
        this.src = "https://cdn.pixabay.com/photo/2014/01/24/04/05/fried-chicken-250863_1280.jpg";

    }

    copy():PouletFrit
    {
        const copy = new PouletFrit();
        return copy;
    }
}
