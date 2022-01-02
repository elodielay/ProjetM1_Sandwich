import { Sandwich } from './sandwich/sandwich';
import { Subject } from 'rxjs';
import { IIngredient } from './ingredients/i-ingredient';
import { plainToInstance } from 'class-transformer';
import SandwichJson from '../../assets/sandwich.json';
import { AccueilModel } from './accueil.model';

export class RechercheModel
{
	private sandwiches:Sandwich[] = plainToInstance(Sandwich, SandwichJson);
	private sandwichsData:Sandwich[] = [];
	recherche_subject = new Subject<Sandwich>();
	private selected!:Sandwich;

	fetchListeSandwich(ing:string)
	{
		let accueilMod: AccueilModel = new AccueilModel;
		let compteur: number = 0;
		this.sandwiches = accueilMod.getSandwiches();

		for(let i=0; i < this.sandwiches.length; i++){
			let listeIng: IIngredient[] = this.sandwiches[i].ingredients;
			for(let y = 0; y < this.sandwiches[i].ingredients?.length; y++){
				if(ing.toLowerCase() == listeIng[y].getLibelle().toLowerCase() || listeIng[y].getLibelle().toLowerCase().includes(ing.toLowerCase())){
					this.sandwichsData?.push(this.sandwiches[i]);
				}
			}
		}
	}

	public getSandwichData():Sandwich[]
	{
		return this.sandwichsData;
	}

	public viderListeData():void
	{
		this.sandwichsData.splice(0, this.sandwichsData.length);
	}

	public setSelected(index:number):void
	{
		this.selected = this.sandwiches[index];
		this.emitSandwich();
	}

	emitSandwich():void
	{
		this.recherche_subject.next(this.selected!);
	}
}