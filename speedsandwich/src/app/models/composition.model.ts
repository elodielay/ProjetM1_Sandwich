import { Observable, Subject } from 'rxjs';
import { Sandwich } from './sandwich/sandwich';
import { Menu } from './menu/menu';

import { Pain } from './ingredients/pains/pain';
import { PainBaguette } from './ingredients/pains/pain-baguette';
import { PainPita } from './ingredients/pains/pain-pita';

import { Viande } from './ingredients/viandes/viande';
import { EscalopeDinde } from './ingredients/viandes/escalope-dinde';
import { PouletFrit } from './ingredients/viandes/poulet-frit';
import { SteackHache } from './ingredients/viandes/steack-hache';

import { Cheese } from './ingredients/cheeses/cheese';
import { Cheddar } from './ingredients/cheeses/cheddar';
import { Chevre } from './ingredients/cheeses/chevre';
import { Emmental } from './ingredients/cheeses/emmental';

import { Sauce } from './ingredients/sauces/sauce';
import { Ketchup } from './ingredients/sauces/ketchup';
import { Mayonnaise } from './ingredients/sauces/mayonnaise';
import { Moutarde } from './ingredients/sauces/moutarde';

import { Supplements } from './ingredients/supplements/supplements';
import { Frite } from './ingredients/supplements/frite';
import { Potatoes } from './ingredients/supplements/potatoes';

import { Boisson } from './ingredients/boissons/boisson';
import { Cola } from './ingredients/boissons/cola';
import { Eau } from './ingredients/boissons/eau';
import { SodaOrange } from './ingredients/boissons/soda-orange';

export class CompositionModel
{
	comp_subject = new Subject<Menu>();

	private menu!:Menu;
	private created:number;

	private clg_pains:Pain[] = [
		new PainBaguette(),
		new PainPita()
	];
	private clg_viandes:Viande[] = [
		new EscalopeDinde(),
		new PouletFrit(),
		new SteackHache()
	];
	private clg_fromages:Cheese[] = [
		new Cheddar(),
		new Chevre(),
		new Emmental()
	];
	private clg_sauces:Sauce[] = [
		new Ketchup(),
		new Mayonnaise(),
		new Moutarde()
	];
	private clg_supplements:Supplements[] = [
		new Frite(),
		new Potatoes()
	];
	private clg_boissons:Boisson[] = [
		new Cola(),
		new Eau(),
		new SodaOrange()
	];

	getClgPains():Pain[]
	{
		return this.clg_pains;
	}
	getClgViandes():Viande[]
	{
		return this.clg_viandes;
	}
	getClgCheeses():Cheese[]
	{
		return this.clg_fromages;
	}
	getClgSauces():Sauce[]
	{
		return this.clg_sauces;
	}
	getClgSupplements():Supplements[]
	{
		return this.clg_supplements;
	}
	getClgBoissons():Boisson[]
	{
		return this.clg_boissons;
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
			this.menu.setName(name);
		}
		this.emitMenu();
	}
	setAccompaniement(index:number):void
	{
		const accompaniement = this.clg_supplements[index];
		this.menu.setAccompaniement(accompaniement);
		this.emitMenu();
	}
	setDrink(index:number):void
	{
		const drink = this.clg_boissons[index];
		this.menu.setDrink(drink);
		this.emitMenu();
	}

	constructor()
	{
		this.created = 0;
		this.initDefault("");
	}

	initDefault(menu:string):void
	{
		const name = (menu);
		this.menu = new Menu(name);
		this.emitMenu();
	}

	emitMenu():void
	{
		this.comp_subject.next(this.menu.copy());
	}
}