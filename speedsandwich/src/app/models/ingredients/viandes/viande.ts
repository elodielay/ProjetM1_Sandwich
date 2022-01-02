import { IIngredient } from "../i-ingredient";

export abstract class Viande implements IIngredient{
    price:number = 0;
    wording:string = "";
    count:number =0;
    src:string = "";
   
    constructor() {}

    setCount(n:number):void
    {
        this.count = n;
    }
    decCount():void
    {
        if(this.count>0){
            this.count--;
        }   
    }
    getImage():string
    {
        return this.src;
    }
    getPrice():number
    {
        return this.price;
    }
    getCount():number
    {
        return this.count;
    }
    getWording():string
    {
        return this.wording;
    }
    incCount():void
    {
        this.count++;
    }
    toString():string
    {
        return this.wording + " : " + this.getPrice()*this.getCount();
    };  
}
