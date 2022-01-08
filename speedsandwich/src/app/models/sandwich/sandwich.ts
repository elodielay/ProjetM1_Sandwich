import { Type } from 'class-transformer';

import { IIngredient } from "../ingredients/i-ingredient";
import { Bread } from "../ingredients/breads/bread";

export class Sandwich
{
    id:number;
    name:string;
    bread?:Bread;
    image:string;
    supplements:IIngredient[];

    @Type(() => String)
    baseIng: String[];

    getBread():Bread
    {
      return this.bread!;
    }
    getIngredients():String[]
    {
      return this.baseIng;
    }
    getSupplements():IIngredient[]
    {
      return this.supplements.slice();
    }

    setBread(bread:Bread):void
    {
      this.bread = bread;
    }

    constructor(id:number, name:string, image:string, baseIng: String[])
    {
      this.id = id;
      this.name = name;
      this.bread = undefined;
      this.image = image;
      this.supplements = new Array(0);
      this.baseIng = new Array(0);
    }

    addIngredient(ingredient:IIngredient):void
    {
      this.supplements.push(ingredient);
    }


    getPrice():number{
      let price : number = 0;
      this.supplements!.forEach(element => {
        price += element.getPrice()
      });
      return price;
    }

    copy():Sandwich
    {
      const sandwich = new Sandwich(this.id, this.name, this.image, this.baseIng);
      this.supplements.forEach(ingredient => {
        sandwich.addIngredient(ingredient);
      });
      return sandwich;
    }

    toString():string
    {
        var final : string = "";
        final+= "\n" + this.name  +' : pour le prix de ';
        final.replace("\n", "<br>");
        return final;
    }
}