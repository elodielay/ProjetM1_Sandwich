import { Accompaniment } from "./accompaniment";

export class Potatoes extends Accompaniment
{
    constructor()
    {
        super();
        this.price = 0.5;
        this.wording = "Potatoes";
        this.count = 0;
        this.src = "https://cdn.pixabay.com/photo/2019/06/19/15/16/fried-potatoes-4285107_1280.jpg";
    }

    copy():Potatoes
    {
        const copy = new Potatoes();
        return copy;
    }
}
