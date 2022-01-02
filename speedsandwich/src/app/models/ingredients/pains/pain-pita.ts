import { Pain } from "./pain";

export class PainPita extends Pain
{
    constructor()
    {
        super();
        this.price = 0.5;
        this.wording = "Pain Pita";
        this.count = 0;
        this.src = "image";
    }
}