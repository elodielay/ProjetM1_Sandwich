import { Viande } from "./viande";

export class SteackHache extends Viande
{
    constructor()
    {
        super();
        this.libelle = "Steak Hache"
        this.prix = 0.5;
        this.src = "https://www.paysan-breton.fr/wp-content/uploads/2017/11/viande-hachee.jpg";
    }
}