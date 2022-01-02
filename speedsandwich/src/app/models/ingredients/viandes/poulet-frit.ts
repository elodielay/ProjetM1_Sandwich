import { Viande } from "./viande";

export class PouletFrit extends Viande
{
    constructor()
    {
        super();
        this.prix = 0.7;
        this.libelle = "Poulet Frit";
        this.count = 0;
        this.src = "image";
    }
}