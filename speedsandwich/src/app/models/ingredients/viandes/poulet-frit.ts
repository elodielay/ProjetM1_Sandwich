import { Viande } from "./viande";

export class PouletFrit extends Viande
{
    constructor()
    {
        super();
        this.price = 0.7;
        this.wording = "Poulet Frit";
        this.count = 0;
        this.src = "image";
    }
}