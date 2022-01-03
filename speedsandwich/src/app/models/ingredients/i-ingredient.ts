export interface IIngredient {
    getPrice():number;
    toString():string;
    getCount():number;
    getWording():string;
    getImage():string;

    incCount():void;
    decCount():void;
    setCount(n:number):void;
    
}
