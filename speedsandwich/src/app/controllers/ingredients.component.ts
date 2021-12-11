import { Component } from '@angular/core';
import { Sandwich } from '../models/sandwich/sandwich';
import { AccueilModel } from '../models/accueil.model';
import { PanierModel } from '../models/panier.model';

@Component({
  selector: 'app-ingredients',
  templateUrl: '../views/ingredients.component.html',
  styleUrls: ['../stylesheets/ingredients.component.css']
})
export class IngredientsComponent {

  sandwich!:Sandwich;

  constructor(private accueil_model:AccueilModel, private panier_model:PanierModel)
  {
    this.accueil_model.accueil_subject.subscribe(
      (sandwich:Sandwich) => {
        this.sandwich = sandwich;
      }
    );
  }

  onAjoute():void
  {
    this.panier_model.ajouter(this.sandwich);
    this.accueil_model.setSelected(-1);
  }
}
