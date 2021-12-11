import { Sandwich } from './sandwich/sandwich';
import { Subject } from 'rxjs';

export class PanierModel
{
	panier_subject = new Subject<Sandwich[]>();

	private sandwichs?:Sandwich[] = [];

	getTaille():number
	{
		let taille:number = 0;
		for (let sandwich of this.sandwichs!) {
			taille += 1;
		}
		return taille;
	}
	getPrixTotal():number
	{
		let prix_total:number = 0;
		for (let sandwich of this.sandwichs!) {
			prix_total += sandwich.getPrix();
		}
		return prix_total;
	}

	ajouter(sandwich:Sandwich):void
	{
		this.sandwichs!.push(sandwich);
		this.emitSandwichs();
	}
	
	retirer(index:number):void
	{
		this.sandwichs!.splice(index, 1);
		this.emitSandwichs();
	}

	emitSandwichs():void
	{
		this.panier_subject.next(this.sandwichs!.slice());
	}
}
