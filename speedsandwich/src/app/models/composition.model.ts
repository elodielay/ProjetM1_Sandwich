import { Observable, Subject } from 'rxjs';
import { Sandwich } from './sandwich/sandwich';
import { Menu } from './menu/menu';

import { Bread } from './ingredients/breads/bread';
import { PainBaguette } from './ingredients/breads/pain-baguette';
import { PainPita } from './ingredients/breads/pain-pita';

import { Meat } from './ingredients/meats/meat';
import { EscalopeDinde } from './ingredients/meats/escalope-dinde';
import { PouletFrit } from './ingredients/meats/poulet-frit';
import { SteackHache } from './ingredients/meats/steack-hache';

import { Cheese } from './ingredients/cheeses/cheese';
import { Cheddar } from './ingredients/cheeses/cheddar';
import { Chevre } from './ingredients/cheeses/chevre';
import { Emmental } from './ingredients/cheeses/emmental';

import { Sauce } from './ingredients/sauces/sauce';
import { Ketchup } from './ingredients/sauces/ketchup';
import { Mayonnaise } from './ingredients/sauces/mayonnaise';
import { Moutarde } from './ingredients/sauces/moutarde';

import { Accompaniment } from './ingredients/accompaniments/accompaniment';
import { Frite } from './ingredients/accompaniments/frite';
import { Potatoes } from './ingredients/accompaniments/potatoes';

import { Drink } from './ingredients/drinks/drink';
import { Cola } from './ingredients/drinks/cola';
import { Eau } from './ingredients/drinks/eau';
import { SodaOrange } from './ingredients/drinks/soda-orange';

export class CompositionModel
{
	comp_subject = new Subject<Menu>();

	private menu!:Menu;
	private created:number;
	private clg_breads = [
		new PainPita(),
		new PainBaguette()
	];
	private clg_meats = [
		new PouletFrit(),
		new SteackHache(),
		new EscalopeDinde()
	];
	private clg_cheeses = [
		new Chevre(),
		new Cheddar(),
		new Emmental()
	];
	private clg_sauces = [
		new Ketchup(),
		new Moutarde(),
		new Mayonnaise()
	];
	private clg_accompaniments = [
		new Frite(),
		new Potatoes()
	];
	private clg_drinks = [
		new Eau(),
		new Cola(),
		new SodaOrange()
	];

	getClgBreads():Bread[]
	{
		return this.clg_breads;
	}
	getClgMeats():Meat[]
	{
		return this.clg_meats;
	}
	getClgCheeses():Cheese[]
	{
		return this.clg_cheeses;
	}
	getClgSauces():Sauce[]
	{
		return this.clg_sauces;
	}
	getClgAccompaniments():Accompaniment[]
	{
		return this.clg_accompaniments;
	}
	getClgDrinks():Drink[]
	{
		return this.clg_drinks;
	}

	setSandwich(sandwich:Sandwich):void
	{
		this.menu.setSandwich(sandwich);
	}

	setSauce(index:number):void
	{
		const sauce = this.clg_sauces[index];
		this.menu.setSauce(sauce);
		this.emitMenu();
	}
	setName(menu:string):void
	{
		const name = menu;
		if(name.length==0){
			this.created++;
			this.menu.setName("Menu n° "+this.created.toString());
		}else{
			this.menu.setName("Menu "+name);
		}
		this.emitMenu();
	}
	setBread(index:number):void
	{
		const bread = this.clg_breads[index];
		this.menu.getSandwich().setBread(bread);
		this.emitMenu();
	}
	setAccompaniement(index:number):void
	{
		const accompaniement = this.clg_accompaniments[index];
		this.menu.setAccompaniement(accompaniement);
		this.emitMenu();
	}
	setDrink(index:number):void
	{
		const drink = this.clg_drinks[index];
		this.menu.setDrink(drink);
		this.emitMenu();
	}

	constructor()
	{
		this.created = 0;
		this.initDefault("");
	}

	addMeat(index:number):void
	{
		const meat = this.clg_meats[index];
		meat.incCount();
		if (meat.getCount()==1) {
			const sandwich = this.menu.getSandwich();
			sandwich?.addSupplement(meat);
		}
		console.log(this.menu.getSandwich());
		this.emitMenu();
	}
	addCheese(index:number):void
	{
		const cheese = this.clg_cheeses[index];
		cheese.incCount();
		if (cheese.getCount()==1) {
			const sandwich = this.menu.getSandwich();
			sandwich.addSupplement(cheese);
		}
		this.emitMenu();
	}

	removeMeat(index:number):void
	{
		const meat = this.clg_meats[index];
		if (meat.getCount()>0) {
			meat.decCount();
			if (meat.getCount()==0) {
				const sandwich = this.menu.getSandwich();
				sandwich.removeSupplement(meat);
			}
			console.log(this.menu.getSandwich());
			this.emitMenu();
		}
	}
	removeCheese(index:number):void
	{
		const cheese = this.clg_cheeses[index];
		if (cheese.getCount()>0) {
			cheese.decCount();
			if (cheese.getCount()==0) {
				const sandwich = this.menu.getSandwich();
				sandwich.removeSupplement(cheese);
			}
			this.emitMenu();
		}
	}

	initDefault(menu:string):void
	{
		const name = menu;
		this.menu = new Menu(name);
		this.emitMenu();
	}
	resetSupplements():void
	{
		const sandwich = this.menu.getSandwich();
		sandwich.getSupplements().forEach(element => {
			element.setCount(0);
		});
	}

	emitMenu():void
	{
		this.comp_subject.next(this.menu.copy());
	}
}