import { Sandwich } from '../sandwich/sandwich';
import { Boisson } from '../ingredients/boissons/boisson';
import { Sauce } from '../ingredients/sauces/sauce';
import { Supplements } from '../ingredients/supplements/supplements';

export class Menu
{
	private static count:number = 0;

	private name:string;
	private sandwich!:Sandwich;
	private sauce!:Sauce;
	private accompaniement!:Supplements;
	private drink!:Boisson;
	image!:string;

	getPrix():number
	{
		let prix = this.sandwich.getPrix();
		prix += this.accompaniement!.prix;
		prix += this.drink!.prix;
		return prix;
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
	setAccompaniement(accompaniement:Supplements):void
	{
		this.accompaniement = accompaniement;
	}
	setDrink(drink:Boisson):void
	{
		this.drink = drink;
	}

	constructor(name:string)
	{
		this.name = name;
	}

	complete():boolean
	{
		if (this.sauce && this.accompaniement && this.drink) {
			return true;
		}
		return false;
	}

	copy():Menu
	{
		const copy = new Menu(this.name);
		copy.setSandwich(this.sandwich);
		copy.setSauce(this.sauce);
		copy.setAccompaniement(this.accompaniement);
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