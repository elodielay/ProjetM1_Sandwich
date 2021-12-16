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

import { Fromage } from './ingredients/fromages/fromage';
import { Cheddar } from './ingredients/fromages/cheddar';
import { Chevre } from './ingredients/fromages/chevre';
import { Emmental } from './ingredients/fromages/emmental';

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

	private menu:Menu = new Menu();

	private clg_pains:Pain[] = [
		new PainBaguette(),
		new PainPita()
	];
	private clg_viandes:Viande[] = [
		new EscalopeDinde(),
		new PouletFrit(),
		new SteackHache()
	];
	private clg_fromages:Fromage[] = [
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
	getClgFromages():Fromage[]
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

	setDrink(index:number):void
	{
		const drink = this.clg_boissons[index];
		this.menu.setDrink(drink);
		this.emitMenu();
	}

	emitMenu():void
	{
		console.log(this.menu);
		this.comp_subject.next(this.menu.copy());
	}
}