import { Viande } from "./viande";

export class SteackHache extends Viande
{
    constructor()
    {
        super();
        this.wording = "Steak Hache"
        this.price = 0.5;
        this.src = "https://www.paysan-breton.fr/wp-content/uploads/2017/11/viande-hachee.jpg";
    }

    copy():SteackHache
    {
        const copy = new SteackHache();
        return copy;
    }
}
