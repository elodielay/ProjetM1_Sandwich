import { Drink } from "./drink";


export class Eau extends Drink{
    constructor(){
        super();
        this.price = 0.5;
        this.wording = "Eau";
        this.count = 0;
        this.src = "https://cdn.pixabay.com/photo/2017/05/13/18/05/evian-2310307_1280.jpg";
    }

    copy():Eau
    {
        const copy = new Eau();
        return copy;
    }
}
