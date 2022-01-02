export interface IIngredient
{
    getPrix():number;
    toString():string;
    getCount():number;
    getLibelle():string;
    getImage():string;

    incCount():void;
    decCount():void;
    setCount(n:number):void;
}