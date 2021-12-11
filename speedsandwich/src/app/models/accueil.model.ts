import { Sandwich } from './sandwich/sandwich';
import { Observable, Subject } from 'rxjs';
import SandwichJson from '../../assets/sandwich.json';
import { plainToClass, plainToInstance, Type } from 'class-transformer';
import { PainBaguette } from './ingredients/pains/pain-baguette';
import { SteackHache } from './ingredients/viandes/steack-hache';
import { Ketchup } from './ingredients/sauces/ketchup';
import { Cheddar } from './ingredients/fromages/cheddar';
import { PouletFrit } from './ingredients/viandes/poulet-frit';
import { Mayonnaise } from './ingredients/sauces/mayonnaise';
import { PainPita } from './ingredients/pains/pain-pita';
import { Moutarde } from './ingredients/sauces/moutarde';
import { Emmental } from './ingredients/fromages/emmental';
import { Chevre } from './ingredients/fromages/chevre';
import { EscalopeDinde } from './ingredients/viandes/escalope-dinde';
import { IngredientsComponent } from '../controllers/ingredients.component';
import { IIngredient } from './ingredients/i-ingredient';

export class AccueilModel
{
	accueil_subject = new Subject<Sandwich>();

	private selected?:Sandwich;
	private sandwiches:Sandwich[] = plainToInstance(Sandwich, SandwichJson);
	private suggestions:Sandwich[] = [];

	public getSandwiches():Sandwich[]
	{
		this.sandwiches[0].ingredients = [
			new PainBaguette,
			new SteackHache,
			new Ketchup,
			new Cheddar
		];

		this.sandwiches[1].ingredients = [
			new PainBaguette,
			new PouletFrit,
			new Mayonnaise,
			new Cheddar
		];

		this.sandwiches[2].ingredients = [
			new PainPita,
			new PouletFrit,
			new Moutarde,
			new Emmental
		];

		this.sandwiches[3].ingredients = [
			new PainPita,
			new PouletFrit,
			new Moutarde,
			new Emmental,
			new Chevre
		];

		this.sandwiches[4].ingredients = [
			new PainPita,
			new SteackHache,
			new Ketchup,
			new Cheddar,
			new Emmental,
			new Chevre
		];

		return this.sandwiches;
	}
	public getSuggestions():Sandwich[]
	{
		this.suggestions.splice(0, this.suggestions.length);
		this.suggestions.push(this.sandwiches[0]);
		this.suggestions.push(this.sandwiches[1]);
		this.suggestions.push(this.sandwiches[2]);
		return this.suggestions;
	}

	public setSelected(index:number):void
	{
		this.selected = this.sandwiches[index];
		this.emitSandwich();
	}

	emitSandwich():void
	{
		this.accueil_subject.next(this.selected!);
	}
}