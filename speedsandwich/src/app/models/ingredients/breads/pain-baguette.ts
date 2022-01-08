import { Bread } from "./bread";

export class PainBaguette extends Bread
{
    constructor()
    {
        super();
        this.price = 0.7;
        this.wording = "Baguette";
        this.count = 1;
        this.src = "image";

    }

    copy():PainBaguette
    {
        const copy = new PainBaguette();
        return copy;
    }
}
