import { Component, OnInit } from '@angular/core';
import { RechercheModel } from '../models/recherche.model';
import { Sandwich } from '../models/sandwich/sandwich';
import { PanierModel } from '../models/panier.model';

@Component({
  selector: 'app-recherche',
  templateUrl: '../views/recherche.component.html',
  styleUrls: ['../stylesheets/recherche.component.css']
})
export class RechercheComponent implements OnInit {

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

  ngOnInit(): void {}

  // Méthode qui affiche les données après clique sur la bouton de recherche 
  onSearch() {

    this.sandwiches.splice(0, this.sandwiches.length); 
    
    this.recherche_model.fetchListeSandwich(this.ing); // fetch les sandwichs qui correspondent au mot clé recherché

    for(let i=0; i < this.recherche_model.getSandwichData().length; i++){
      this.hiddenData = true;
      this.sandwiches.push(this.recherche_model.getSandwichData()[i]); // push les sandwichs resultant de la recherche vers la vue 
    }

    this.recherche_model.viderListeData(); 

    
    
	}

  // Méthode pour ajouter un sandwich resultant de la recherche au panier après clique sur le bouton ajouter au panier
  onAjoute(index:number):void
  {
    this.rechercheModel.setSelected(index);
    this.panier_model.addItem(this.sandwich);
  
  }

}
