import { Bread } from "./bread";

export class PainBaguette extends Bread
{
    constructor()
    {
        super();
        this.price = 0.7;
        this.wording = "Baguette";
        this.count = 1;
        this.src = "https://cdn.pixabay.com/photo/2017/06/23/23/57/bread-2436370_1280.jpg";

    }

    copy():PainBaguette
    {
        const copy = new PainBaguette();
        return copy;
    }
}
