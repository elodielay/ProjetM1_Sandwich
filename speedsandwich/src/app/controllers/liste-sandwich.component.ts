import { Component } from '@angular/core';
import { AccueilModel } from '../models/accueil.model';
import { Sandwich } from '../models/sandwich/sandwich';

@Component({
  selector: 'app-liste-sandwich',
  templateUrl: '../views/liste-sandwich.component.html',
  styleUrls: ['../stylesheets/liste-sandwich.component.css']
})
export class ListeSandwichComponent {

  selected?:Sandwich;
  sandwiches:Sandwich[] = [];

  constructor(private accueil_model:AccueilModel)
  {
    this.accueil_model.accueil_subject.subscribe(
      (sandwich:Sandwich) => {
        this.selected = sandwich;
      }
    );
    this.sandwiches = this.accueil_model.getSandwiches();
  }

  onSelect(index:number):void
  {
    this.accueil_model.setSelectedSandwich(index);
  }
}
