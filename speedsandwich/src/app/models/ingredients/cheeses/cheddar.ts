import { Cheese } from "./cheese";

export class Cheddar extends Cheese
{
    constructor()
    {
        super();
        this.wording = "Cheddar"
        this.price = 0.5;
        this.src = "https://cdn.pixabay.com/photo/2010/12/16/12/09/keens-cheddar-3514_1280.jpg";
    }

    copy():Cheddar
    {
        const copy = new Cheddar();
        return copy;
    }
}