import { Drink } from "./drink";


export class SodaOrange extends Drink{
    constructor(){
        super();
        this.price = 0.5;
        this.wording = "Soda à l'orange";
        this.count = 0;
        this.src = "https://cdn.pixabay.com/photo/2013/03/01/18/48/aluminum-87987_1280.jpg";
    }

    copy():SodaOrange
    {
        const copy = new SodaOrange();
        return copy;
    }
}
