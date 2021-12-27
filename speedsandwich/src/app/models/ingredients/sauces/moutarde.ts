import { Sauce } from "./sauce";

export class Moutarde extends Sauce{
    constructor(){
        super();
        this.prix = 0.5;
        this.libelle = "Moutarde";
        this.count = 0;
        this.src = "https://cdn.pixabay.com/photo/2014/08/10/21/34/mustard-415119_1280.jpg";
    }
}
