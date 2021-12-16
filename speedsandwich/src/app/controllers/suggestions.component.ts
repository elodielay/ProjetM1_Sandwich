import { Component } from '@angular/core';
import { AccueilModel } from '../models/accueil.model';
import { PanierModel } from '../models/panier.model';
import { Sandwich } from '../models/sandwich/sandwich';

@Component({
  selector: 'app-suggestions',
  templateUrl: '../views/suggestions.component.html',
  styleUrls: ['../stylesheets/suggestions.component.css']
})
export class SuggestionsComponent {

  selected?:Sandwich;
  sandwiches:Sandwich[];

  constructor(private accueil_model:AccueilModel, private panier_model:PanierModel)
  {
    this.accueil_model.accueil_subject.subscribe(
      (sandwich:Sandwich) => {
        this.selected = sandwich;
      }
    );
    this.sandwiches = this.accueil_model.getSuggestions();
  }

  onAjoute(index:number):void
  {
    this.panier_model.addItem(this.sandwiches[index]);
  }
  
  onSelect(index:number):void
  {
    this.accueil_model.setSelectedSuggestion(index);
  }
}