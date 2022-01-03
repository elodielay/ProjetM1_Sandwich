import { Sauce } from "./sauce";

export class Ketchup extends Sauce{
    constructor(){
        super();
        this.price = 0.5;
        this.wording = "Ketchup";
        this.count = 0;
        this.src = "https://cdn.pixabay.com/photo/2014/05/28/12/26/ketchup-356439_1280.jpg";
    }

    copy():Ketchup
    {
        const copy = new Ketchup();
        return copy;
    }
}
