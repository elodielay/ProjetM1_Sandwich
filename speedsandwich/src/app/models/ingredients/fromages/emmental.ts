import { Fromage } from "./fromage";

export class Emmental extends Fromage{
    constructor(){
        super();
        this.wording = "Emmental"
        this.price = 0.5;
        this.src = "https://cdn.pixabay.com/photo/2013/02/13/17/44/cheese-81402_1280.jpg";
    }
}
