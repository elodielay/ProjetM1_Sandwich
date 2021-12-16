import { Sandwich } from '../sandwich/sandwich';
import { Boisson } from '../ingredients/boissons/boisson';
import { Supplements } from '../ingredients/supplements/supplements';

export class Menu
{
	private name = "";
	private sandwich!:Sandwich;
	private accompaniement!:Supplements;
	private drink!:Boisson;

	setName(name:string)
	{
		this.name = name;
	}
	setSandwich(sandwich:Sandwich):void
	{
		this.sandwich = sandwich;
	}
	setAccompaniement(accompaniement:Supplements):void
	{
		this.accompaniement = accompaniement;
	}
	setDrink(drink:Boisson):void
	{
		this.drink = drink;
	}

	copy():Menu
	{
		const copy = new Menu();
		copy.setName(this.name);
		copy.setSandwich(this.sandwich.copy());
		copy.setAccompaniement(this.accompaniement);
		copy.setDrink(this.drink);
		return copy;
	}
}
