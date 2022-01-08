import { Bread } from "./bread";

export class PainPita extends Bread
{
    constructor()
    {
        super();
        this.price = 0.5;
        this.wording = "Pain Pita";
        this.count = 0;
        this.src = "https://cdn.pixabay.com/photo/2019/10/07/06/53/bread-4531840_1280.jpg";
    }

    copy():PainPita
    {
        const copy = new PainPita();
        return copy;
    }
}