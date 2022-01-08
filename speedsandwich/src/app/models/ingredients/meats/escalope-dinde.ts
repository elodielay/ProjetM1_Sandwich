import { Meat } from "./meat";

export class EscalopeDinde extends Meat
{
    constructor()
    {
        super();
        this.price = 0.5;
        this.wording = "Escalope";
        this.count = 0;
        this.src = "https://cdn.pixabay.com/photo/2015/02/13/21/23/meat-635797_1280.jpg";

    }

    copy():EscalopeDinde
    {
        const copy = new EscalopeDinde();
        return copy;
    }

}
