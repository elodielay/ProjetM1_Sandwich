import { Component} from '@angular/core';
import { HeaderComponent } from './header.component';

import { CompositionModel } from '../models/composition.model';
import { PanierModel } from '../models/panier.model';

import { Menu } from '../models/menu/menu';
import { Bread } from '../models/ingredients/breads/bread';
import { Meat } from '../models/ingredients/meats/meat';
import { Cheese } from '../models/ingredients/cheeses/cheese';
import { Sauce } from '../models/ingredients/sauces/sauce';
import { Supplements } from '../models/ingredients/supplements/supplements';
import { Drink } from '../models/ingredients/drinks/drink';

@Component({
  selector: 'app-composition',
  templateUrl: '../views/composition.component.html',
  styleUrls: ['../stylesheets/composition.component.css']
})

export class CompositionComponent
{

  menu!:Menu;
  clg_pains:Bread[];
  clg_meats:Meat[];
  clg_cheeses:Cheese[];
  clg_sauces:Sauce[];
  clg_supplements:Supplements[];
  clg_drinks:Drink[];

  constructor(private comp_model:CompositionModel, private panier_model:PanierModel)
  {
    this.clg_pains = this.comp_model.getClgBreads();
    this.clg_meats = this.comp_model.getClgMeats();
    this.clg_cheeses = this.comp_model.getClgCheeses();
    this.clg_sauces = this.comp_model.getClgSauces();
    this.clg_supplements = this.comp_model.getClgSupplements();
    this.clg_drinks = this.comp_model.getClgDrinks();
    this.comp_model.comp_subject.subscribe(
      (menu:Menu) => {
        this.menu = menu;
      }
    );
    this.comp_model.emitMenu();
  }

  onQuitCompo():void
  {
    this.comp_model.initDefault("");
  }
  onAddToPanier():void
  {
    var element = (<HTMLInputElement>document.getElementById("nameMenu")).value;
    this.comp_model.setName(element);
    this.panier_model.addItem(this.menu.copy());
    this.comp_model.initDefault(element);
  }

  onSelectSauce(index:number):void
  {
    this.comp_model.setSauce(index);
  }
  onSelectAccompaniement(index:number):void
  {
    this.comp_model.setAccompaniement(index);
  }
  onSelectDrink(index:number):void
  {
    this.comp_model.setDrink(index);
  }

}
