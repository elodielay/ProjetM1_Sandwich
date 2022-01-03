import { IIngredient } from "../ingredients/i-ingredient";


export class Sandwich {
    id:number;
    name:string;
    image:string;
    ingredients:IIngredient[];

    
    constructor(id:number, name:string, image:string){
      this.id = id;
      this.name = name;
      this.image = image;
      this.ingredients = new Array(0);
    }

    addIngredient(ingredient:IIngredient):void
    {
      this.ingredients.push(ingredient);
    }

    getPrix():number{
      let prix : number = 0;
      this.ingredients!.forEach(element => {
        prix += element.getPrix()
      });
      return prix;
    }

    copy():Sandwich
    {
      const sandwich = new Sandwich(this.id, this.name, this.image);
      this.ingredients.forEach(ingredient => {
        sandwich.addIngredient(ingredient);
      });
      return sandwich;
    }

    toString():string{
        var final : string = "";
        final+= "\n" + this.name  +' : pour le prix de ';
        final.replace("\n", "<br>");
        return final;
    }
}
