import { Component } from '@angular/core';
import { RechercheModel } from '../models/recherche.model';
import { Sandwich } from '../models/sandwich/sandwich';
import { PanierModel } from '../models/panier.model';

@Component({
  selector: 'app-recherche',
  templateUrl: '../views/recherche.component.html',
  styleUrls: ['../stylesheets/recherche.component.css']
})
export class RechercheComponent
{
  sandwiches:Sandwich[] = [];
  ing: string = "";
  recherche_model: RechercheModel = new RechercheModel;
  sandwich!:Sandwich;
  hiddenData !: boolean;
  hiddenSearch !: boolean;
  
  constructor(private rechercheModel:RechercheModel, private panier_model:PanierModel)
  {
    this.rechercheModel.recherche_subject.subscribe(
      (sandwich:Sandwich) => {
        this.sandwich = sandwich;
      }
    );

    this.hiddenData = false;
    this.hiddenSearch = true;
  }

  onSearch():void
  {
    this.sandwiches.splice(0, this.sandwiches.length);
    
    this.recherche_model.fetchListeSandwich(this.ing);

    for(let i=0; i < this.recherche_model.getSandwichData().length; i++){
      this.hiddenData = true;
      this.sandwiches.push(this.recherche_model.getSandwichData()[i]);
    }

    this.recherche_model.viderListeData();
	}

  onAdd(index:number):void
  {
    this.rechercheModel.setSelected(index);
    this.panier_model.addItem(this.sandwich);
  
  }
}