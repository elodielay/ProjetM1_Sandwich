import { Pain } from "./pain";

export class PainPita extends Pain{
    constructor(){
        super();
        this.prix = 0.5;
        this.libelle = "Pain Pita";
        this.count = 0;
        this.src = "image";
    }

    copy():PainPita
    {
        const copy = new PainPita();
        return copy;
    }
}