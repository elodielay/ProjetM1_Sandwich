import { Sandwich } from '../sandwich/sandwich';
import { Drink } from '../ingredients/drinks/drink';
import { Sauce } from '../ingredients/sauces/sauce';
import { Accompaniment } from '../ingredients/accompaniments/accompaniment';
import { IIngredient } from '../ingredients/i-ingredient';

export class Menu
{
	private static count:number = 0;

	private name:string;
	private sandwich!:Sandwich;
	private sauce!:Sauce;
	private accompaniment!:Accompaniment;
	private drink!:Drink;
	image!:string;

	getPrice():number
	{
		let price = this.sandwich.getPrice();
		price += this.accompaniment!.price;
		price += this.drink!.price;
		return price;
	}
	getSandwich():Sandwich
	{
		return this.sandwich;
	}
	getSauce():Sauce
	{
		return this.sauce;
	}
	getDrink():Drink
	{
		return this.drink;
	}
	getAccompaniement():Accompaniment
	{
		return this.accompaniment;
	}
	getSupplements():IIngredient[]
	{
		return this.sandwich.getSupplements();
	}

	setName(name:string)
	{
		this.name = name;
	}
	setSandwich(sandwich:Sandwich):void
	{
		this.sandwich = sandwich;
		if (this.sandwich) {
			this.image = sandwich.image;
		}
	}
	setSauce(sauce:Sauce):void
	{
		this.sauce = sauce;
	}
	setAccompaniement(accompaniment:Accompaniment):void
	{
		this.accompaniment = accompaniment;
	}
	setDrink(drink:Drink):void
	{
		this.drink = drink;
	}

	constructor(name:string)
	{
		this.name = name;
	}

	complete():boolean
	{
		if (this.sauce && this.accompaniment && this.drink) {
			return true;
		}
		return false;
	}

	copy():Menu
	{
		const copy = new Menu(this.name);
		copy.setSandwich(this.sandwich);
		copy.setSauce(this.sauce);
		copy.setAccompaniement(this.accompaniment);
		copy.setDrink(this.drink);
		return copy;
	}
	toString():string{
        var final : string = "";
        final+= "\n" + this.name  +' : pour le prix de ';
        final.replace("\n", "<br>");
        return final;
    }
}
