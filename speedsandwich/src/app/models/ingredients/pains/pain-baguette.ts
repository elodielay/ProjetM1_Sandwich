import { Pain } from "./pain";

export class PainBaguette extends Pain{
    constructor(){
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
