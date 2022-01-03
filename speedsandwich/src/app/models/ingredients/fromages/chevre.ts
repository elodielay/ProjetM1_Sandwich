import { Fromage } from "./fromage";

export class Chevre extends Fromage{
    constructor(){
        super();
        this.wording = "Chevre"
        this.price = 0.5;
        this.src = "https://cdn.pixabay.com/photo/2014/12/13/20/59/cheese-567367_1280.jpg";
    }

    copy():Chevre
    {
        const copy = new Chevre();
        return copy;
    }
}