import { Cheese } from "./cheese";

export class Emmental extends Cheese
{
    constructor()
    {
        super();
        this.wording = "Emmental"
        this.price = 0.5;
        this.src = "https://cdn.pixabay.com/photo/2013/02/13/17/44/cheese-81402_1280.jpg";
    }

    copy():Emmental
    {
        const copy = new Emmental();
        return copy;
    }
}
