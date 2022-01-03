import { IIngredient } from "../i-ingredient";

export abstract class Supplements implements IIngredient {
    price : number = 0;
    wording : string = "";
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
    getPrice():number{
        return this.price;
    }
    getCount():number{
        return this.count;
    }
    getWording():string{
        return this.wording;
    }
    incCount(){
        this.count= 1;
    }
    toString():string{
        return this.wording + " : " + this.getPrice()*this.getCount();
    };

    
}
