import { IIngredient } from "../i-ingredient";

export abstract class Fromage implements IIngredient
{
    price : number = 0;
    wording : string = "";
    count : number =0;
    src : string = "";
    constructor(){}

    setCount(n : number):void
    {
        this.count=n;
    }
    decCount(): void 
    {
        if(this.count>0)
        {
            this.count--;
        }   
    }
    getPrice():number
    {
        return this.price;
    }
    getImage():string
    {
        return this.src;
    }
    getCount():number
    {
        return this.count;
    }
    getWording():string
    {
        return this.wording;
    }
    incCount()
    {
        this.count++;
    }
    toString():string
    {
        return this.wording + " : " + this.getPrice()*this.getCount();
    };  
}
