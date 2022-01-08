import { Sandwich } from './sandwich/sandwich';
import { Observable, Subject } from 'rxjs';
import SandwichJson from '../../assets/sandwich.json';
import { plainToClass, plainToInstance, Type } from 'class-transformer';

import { IIngredient } from './ingredients/i-ingredient';
import { IngredientsComponent } from '../controllers/ingredients.component';

import { PainBaguette } from './ingredients/breads/pain-baguette';
import { PainPita } from './ingredients/breads/pain-pita';

import { SteackHache } from './ingredients/viandes/steack-hache';
import { PouletFrit } from './ingredients/viandes/poulet-frit';
import { EscalopeDinde } from './ingredients/viandes/escalope-dinde';

import { Ketchup } from './ingredients/sauces/ketchup';
import { Mayonnaise } from './ingredients/sauces/mayonnaise';
import { Moutarde } from './ingredients/sauces/moutarde';

import { Cheddar } from './ingredients/cheeses/cheddar';
import { Emmental } from './ingredients/cheeses/emmental';
import { Chevre } from './ingredients/cheeses/chevre';

export class AccueilModel
{
	accueil_subject = new Subject<Sandwich>();

	private selected?:Sandwich;
	private sandwiches:Sandwich[] = plainToInstance(Sandwich, SandwichJson);
	private suggestions:Sandwich[] = [];

	public getSandwiches():Sandwich[]
	{
		this.sandwiches[0].supplement = [
			new PainBaguette
		];

		this.sandwiches[1].supplement = [
			new PainBaguette
		];

		this.sandwiches[2].supplement = [
			new PainPita
		];

		this.sandwiches[3].supplement = [
			new PainPita
		];

		this.sandwiches[4].supplement = [
			new PainPita
		];

		console.log(this.sandwiches);

		return this.sandwiches;
	}

	private createRandomArray(array:number[]) 
	{
		var tmp, current, top=array.length;
		if (top) {
			while(--top) {
			  current = Math.floor(Math.random() * (top + 1));
			  tmp = array[current];
			  array[current] = array[top];
			  array[top] = tmp;
			}
		}
		return array;
	}

	public getSuggestions():Sandwich[]
	{
		var loc = [];
		for (var i=0; i<this.sandwiches.length;++i) {
			loc[i] = i;
		}

		let array_number = this.createRandomArray(loc);
		array_number.forEach(element => {
			if(this.suggestions.length<3) {
				this.suggestions.push(this.sandwiches[element])
			}
		});
		return this.suggestions;
	}

	public resetSelected():void
	{
		this.selected = undefined;
		this.emitSandwich();
	}
	public setSelectedSandwich(index:number):void
	{
		this.selected = this.sandwiches[index];
		this.emitSandwich();
	}
	public setSelectedSuggestion(index:number):void
	{
		this.selected = this.suggestions[index];
		this.emitSandwich();
	}

	emitSandwich():void
	{
		this.accueil_subject.next(this.selected!);
	}
}