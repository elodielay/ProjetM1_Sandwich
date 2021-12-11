import { Component} from '@angular/core';
import { AccueilModel } from '../models/accueil.model';
import { HeaderComponent } from './header.component';

@Component({
	selector: 'app-accueil',
	templateUrl: '../views/accueil.component.html',
	styleUrls: ['../stylesheets/accueil.component.css']
})
export class AccueilComponent
{	
	constructor(private accueil_model:AccueilModel)
	{
		this.accueil_model.emitSandwich();
	}

}