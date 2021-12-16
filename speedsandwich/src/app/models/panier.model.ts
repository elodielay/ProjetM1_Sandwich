import { Sandwich } from './sandwich/sandwich';
import { Subject } from 'rxjs';

export class PanierModel
{
	panier_subject = new Subject<any[]>();

	private articles:any[][];

	constructor()
	{
		this.articles = new Array();
	}

	getTaille():number
	{
		let taille:number = 0;
		for (let sandwich of this.articles) {
			taille += 1;
		}
		return taille;
	}
	getPrixTotal():number
	{
		let prix_total:number = 0;
		for (let sandwich of this.articles) {
			prix_total += sandwich[0].getPrix();
		}
		return prix_total;
	}

	addItem(sandwich:Sandwich):void
	{
		let found = 0;
		if (this.articles) {
			this.articles.forEach(item => {
				if (sandwich==item[0]) {
					found = 1;
					item[1] += 1;
				}
			});
		}
		if (found==0) {
			let tmp = [sandwich, 1];
			this.articles.push(tmp);
		}
		this.emitSandwichs();
	}
	addByIndex(index:number):void
	{
		const item = this.articles[index];
		item[1]++;
		this.emitSandwichs();
	}
	removeByIndex(index:number):void
	{
		const item = this.articles[index];
		if (item[1]>1) {
			item[1]--;
		}
		else {
			this.articles.splice(index, 1);
		}
		this.emitSandwichs();
	}

	emitSandwichs():void
	{
		if (this.articles) {
			this.panier_subject.next(this.articles.slice());
		}
	}
}