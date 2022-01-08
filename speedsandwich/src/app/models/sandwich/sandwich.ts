import { IIngredient } from "../ingredients/i-ingredient";
import { Type } from 'class-transformer';

export class Sandwich
{
    id:number;
    name:string;
    image:string;
    supplements:IIngredient[];

    @Type(() => String)
    baseIng: String[];

    getIngredients():String[]
    {
      return this.baseIng;
    }
    getSupplements():IIngredient[]
    {
      return this.supplements.slice();
    }

    constructor(id:number, name:string, image:string, baseIng: String[])
    {
      this.id = id;
      this.name = name;
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