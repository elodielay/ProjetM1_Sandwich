export interface IIngredient
{
    getCount():number;
    getImage():string;
    getPrice():number;
    getWording():string;
    
    setCount(n:number):void;

    incCount():void;
    decCount():void;

    toString():string;
}