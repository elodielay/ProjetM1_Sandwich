import { Component } from '@angular/core';
import { Sandwich } from '../models/sandwich/sandwich';
import { AccueilModel } from '../models/accueil.model';
import { CompositionModel } from '../models/composition.model';
import { PanierModel } from '../models/panier.model';

@Component({
  selector: 'app-ingredients',
  templateUrl: '../views/ingredients.component.html',
  styleUrls: ['../stylesheets/ingredients.component.css']
})
export class IngredientsComponent
{
  sandwich!:Sandwich;

  constructor(private accueil_model:AccueilModel, private comp_model:CompositionModel, private panier_model:PanierModel)
  {
    this.accueil_model.accueil_subject.subscribe(
      (sandwich:Sandwich) => {
        this.sandwich = sandwich;
      }
    );
  }

  onCreateMenu():void
  {
    this.comp_model.setSandwich(this.sandwich);
  }

  onAjoute():void
  {
    this.panier_model.addItem(this.sandwich);
    this.accueil_model.resetSelected();
  }
}