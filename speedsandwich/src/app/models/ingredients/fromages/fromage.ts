import { IIngredient } from "../i-ingredient";

export abstract class Fromage implements IIngredient
{
    prix : number = 0;
    libelle : string = "";
    count : number = 0;
    src : string = "";

    constructor() {}

    setCount(n:number):void
    {
        this.count=n;
    }
    decCount():void 
    {
        if (this.count>0) {
            this.count--;
        }   
    }
    getPrix():number
    {
        return this.prix;
    }
    getImage():string
    {
        return this.src;
    }
    getCount():number
    {
        return this.count;
    }
    getLibelle():string
    {
        return this.libelle;
    }
    incCount():void
    {
        this.count++;
    }
    toString():string
    {
        return this.libelle + " : " + this.getPrix()*this.getCount();
    };  
}
