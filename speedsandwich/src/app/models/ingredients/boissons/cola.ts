import { Boisson } from "./boisson";


export class Cola extends Boisson{
    constructor(){
        super();
        this.price = 0.5;
        this.wording = "Cola";
        this.count = 0;
        this.src = "https://cdn.pixabay.com/photo/2020/04/08/08/09/cocacola-5016273_1280.jpg";
    }

    copy():Cola
    {
        const copy = new Cola();
        return copy;
    }

}
