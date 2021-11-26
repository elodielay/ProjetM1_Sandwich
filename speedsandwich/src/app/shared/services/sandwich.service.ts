import { Injectable } from '@angular/core';
import { Sandwich } from '../models/sandwich.model';
import { Ingredient } from '../models/ingredient.model';
import { BehaviorSubject } from 'rxjs';
import SandwichJson from '../../../assets/sandwich.json';
import IngredientJson from '../../../assets/ingredient.json';

@Injectable()
export class SandwichService {

	sandwichList: Sandwich[] = SandwichJson;
	ingredientList: Ingredient[] = IngredientJson;
	ingredientSand1: Ingredient[] = [];
	ingredientSand2: Ingredient[] = [];
	ingredientSand3: Ingredient[] = [];
	ingredientSand4: Ingredient[] = [];
	ingredientSand5: Ingredient[] = [];
	ingredientSand6: Ingredient[] = [];
	ingredientSand7: Ingredient[] = [];
	ingredientSand8: Ingredient[] = [];
	ingredientSand9: Ingredient[] = [];
	ingredientSand10: Ingredient[] = [];
	ingredientSand11: Ingredient[] = [];


	public sandwiches: BehaviorSubject<Sandwich[]> = new BehaviorSubject([
		this.sandwichList[1],
		this.sandwichList[2],
		this.sandwichList[3],
		this.sandwichList[4],
		this.sandwichList[5],
		this.sandwichList[7],
		this.sandwichList[8],
		this.sandwichList[9],
		this.sandwichList[10]
	])
	public sandwichesSug: BehaviorSubject<Sandwich[]> = new BehaviorSubject([
		this.sandwichList[0],
		this.sandwichList[6],
		this.sandwichList[9]
	])

	public ingredients: BehaviorSubject<Ingredient[]> = new BehaviorSubject([
		this.ingredientList[0],
		this.ingredientList[1],
		this.ingredientList[2],
		this.ingredientList[3],
		this.ingredientList[4],
		this.ingredientList[5],
		this.ingredientList[6],
		this.ingredientList[7],
		this.ingredientList[8],
		this.ingredientList[9],
		this.ingredientList[10],
		this.ingredientList[11],
		this.ingredientList[12],
		this.ingredientList[13],
		this.ingredientList[14],
		this.ingredientList[15],
		this.ingredientList[16],
		this.ingredientList[17],
		this.ingredientList[18],
		this.ingredientList[19],
		this.ingredientList[20],
		this.ingredientList[21],
		this.ingredientList[22], 
		this.ingredientList[23]
	])

	public sandwich: BehaviorSubject<Sandwich> = new BehaviorSubject(this.sandwiches.value[0])
	public sandwichSug: BehaviorSubject<Sandwich> = new BehaviorSubject(this.sandwichesSug.value[0])

	selectSandwich(index: number): void {
		this.sandwich.next(this.sandwiches.value[index]);
	}

	selectSandwichSug(index: number): void {
		this.sandwichSug.next(this.sandwichesSug.value[index]);
	}

	constructor() {

		//burger steak
		this.ingredientSand1.push(this.ingredientList[5], this.ingredientList[1], this.ingredientList[12], this.ingredientList[13], this.ingredientList[14], this.ingredientList[17], this.ingredientList[19]);
		this.sandwichList[0].ingredients = this.ingredientSand1;

		//burger poisson
		this.ingredientSand2.push(this.ingredientList[5], this.ingredientList[4], this.ingredientList[17], this.ingredientList[20], this.ingredientList[14]);
		this.sandwichList[1].ingredients = this.ingredientSand2;
		
		//burger poulet
		this.ingredientSand3.push(this.ingredientList[5], this.ingredientList[0], this.ingredientList[14], this.ingredientList[17], this.ingredientList[20] );
		this.sandwichList[2].ingredients = this.ingredientSand3;
		
		//club sandwich poulet
		this.ingredientSand4.push(this.ingredientList[8], this.ingredientList[0], this.ingredientList[18], this.ingredientList[14], this.ingredientList[13], this.ingredientList[20]);
		this.sandwichList[3].ingredients = this.ingredientSand4;
		
		//sandwich dinde
		this.ingredientSand5.push(this.ingredientList[9], this.ingredientList[2], this.ingredientList[13], this.ingredientList[14], this.ingredientList[17]);
		this.sandwichList[4].ingredients = this.ingredientSand5;
		
		//sandwich poulet
		this.ingredientSand6.push(this.ingredientList[8], this.ingredientList[0], this.ingredientList[13], this.ingredientList[14], this.ingredientList[17]);
		this.sandwichList[5].ingredients = this.ingredientSand6;
		
		//panini 4 fromages
		this.ingredientSand7.push(this.ingredientList[11], this.ingredientList[16], this.ingredientList[18], this.ingredientList[17], this.ingredientList[13], this.ingredientList[14], this.ingredientList[21]);
		this.sandwichList[6].ingredients = this.ingredientSand7;
		
		//tacos poulet
		this.ingredientSand8.push(this.ingredientList[7], this.ingredientList[0], this.ingredientList[16], this.ingredientList[21]);
		this.sandwichList[7].ingredients = this.ingredientSand8;
		
		//tacos boeuf
		this.ingredientSand9.push(this.ingredientList[7], this.ingredientList[1], this.ingredientList[16], this.ingredientList[19]);
		this.sandwichList[8].ingredients = this.ingredientSand9;
		
		//tacos végé
		this.ingredientSand10.push(this.ingredientList[7], this.ingredientList[13], this.ingredientList[14], this.ingredientList[17], this.ingredientList[22]);
		this.sandwichList[9].ingredients = this.ingredientSand10;
		
		//tacos oeuf
		this.ingredientSand11.push(this.ingredientList[7], this.ingredientList[17], this.ingredientList[22], this.ingredientList[23]);
		this.sandwichList[10].ingredients = this.ingredientSand11;
		
	}

}
