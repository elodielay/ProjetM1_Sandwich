import { Component} from '@angular/core';
import { HeaderComponent } from './header.component';

import { CompositionModel } from '../models/composition.model';
import { PanierModel } from '../models/panier.model';

import { Menu } from '../models/menu/menu';
import { Pain } from '../models/ingredients/pains/pain';
import { Viande } from '../models/ingredients/viandes/viande';
import { Fromage } from '../models/ingredients/fromages/fromage';
import { Sauce } from '../models/ingredients/sauces/sauce';
import { Supplements } from '../models/ingredients/supplements/supplements';
import { Boisson } from '../models/ingredients/boissons/boisson';

@Component({
  selector: 'app-composition',
  templateUrl: '../views/composition.component.html',
  styleUrls: ['../stylesheets/composition.component.css']
})
export class CompositionComponent {

  menu!:Menu;
  clg_pains:Pain[];
  clg_viandes:Viande[];
  clg_fromages:Fromage[];
  clg_sauces:Sauce[];
  clg_supplements:Supplements[];
  clg_boissons:Boisson[];

  constructor(private comp_model:CompositionModel, private panier_model:PanierModel)
  {
    this.clg_pains = this.comp_model.getClgPains();
    this.clg_viandes = this.comp_model.getClgViandes();
    this.clg_fromages = this.comp_model.getClgFromages();
    this.clg_sauces = this.comp_model.getClgSauces();
    this.clg_supplements = this.comp_model.getClgSupplements();
    this.clg_boissons = this.comp_model.getClgBoissons();
    this.comp_model.comp_subject.subscribe(
      (menu:Menu) => {
        this.menu = menu;
      }
    );
    this.comp_model.emitMenu();
  }

  onQuitCompo():void
  {
    this.comp_model.initDefault();
  }
  onAddToPanier():void
  {
    this.panier_model.addItem(this.menu.copy());
    this.comp_model.initDefault();
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
