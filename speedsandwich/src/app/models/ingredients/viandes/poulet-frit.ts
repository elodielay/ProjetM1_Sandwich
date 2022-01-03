import { Viande } from "./viande";

export class PouletFrit extends Viande{
    //override prix : number = 0;
    constructor(){
        super();
        this.prix = 0.7;
        this.libelle = "Poulet Frit";
        this.count = 0;
        this.src = "image";

    }

    copy():PouletFrit
    {
        const copy = new PouletFrit();
        return copy;
    }

}
