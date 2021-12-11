import { Observable, Subject } from 'rxjs';
import { Sandwich } from './sandwich/sandwich';

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
	comp_subject = new Subject<Sandwich>();

	private sandwich:Sandwich = new Sandwich("", "");

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

	addViande(index:number):void
	{
		const ing:Viande = this.clg_viandes[index];
		ing.incCount();
		if (ing.getCount()===1) {
			this.sandwich.addIngredient(ing);
		}
		this.emitSandwich();
	}
	addFromage(index:number):void
	{
		const ing:Fromage = this.clg_fromages[index];
		ing.incCount();
		if (ing.getCount()===1) {
			this.sandwich.addIngredient(ing);
		}
		this.emitSandwich();
	}

	removeIngredient(index:number):void
	{
		this.sandwich.removeIngredientByIndex(index);
		this.emitSandwich();
	}
	removeViande(index:number):void
	{
		const ing:Viande = this.clg_viandes[index];
		ing.decCount();
		if (ing.getCount()<1) {
			this.sandwich.removeIngredient(ing);
		}
		this.emitSandwich();
	}
	removeFromage(index:number):void
	{
		const ing:Fromage = this.clg_fromages[index];
		ing.decCount();
		if (ing.getCount()<1) {
			this.sandwich.removeIngredient(ing);
		}
		this.emitSandwich();
	}

	changePain(pain:Pain):void
	{
		this.sandwich.setPain(pain);
	}

	emitSandwich():void
	{
		this.comp_subject.next(this.sandwich.copy());
	}
}