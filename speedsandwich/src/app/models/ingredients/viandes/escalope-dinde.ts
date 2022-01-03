import { Viande } from "./viande";

export class EscalopeDinde extends Viande{
    constructor(){
        super();
        this.price = 0.5;
        this.wording = "Escalope";
        this.count = 0;
        this.src = "image";

    }

}
