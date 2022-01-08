import { Bread } from "./bread";

export class PainPita extends Bread
{
    constructor()
    {
        super();
        this.price = 0.5;
        this.wording = "Pain Pita";
        this.count = 0;
        this.src = "image";
    }

    copy():PainPita
    {
        const copy = new PainPita();
        return copy;
    }
}