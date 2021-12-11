import { IIngredient } from "../i-ingredient";

export abstract class Supplements implements IIngredient {
    prix : number = 0;
    libelle : string = "";
    count : number =1;
    src : string = "";

    constructor(){
    }
    setCount(n :number):void{
        this.count=n;
    }
    decCount(): void {
        this.count=0;
    }
    getImage():string{
        return this.src;
    }
    getPrix():number{
        return this.prix;
    }
    getCount():number{
        return this.count;
    }
    getLibelle():string{
        return this.libelle;
    }
    incCount(){
        this.count= 1;
    }
    toString():string{
        return this.libelle + " : " + this.getPrix()*this.getCount();
    };
}
