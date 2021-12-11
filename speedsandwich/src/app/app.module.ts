import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './controllers/accueil.component';
import { PanierComponent } from './controllers/panier.component';
import { AccueilModel } from './models/accueil.model';
import { PanierModel } from './models/panier.model';
import { IngredientsComponent } from './controllers/ingredients.component';
import { ListeSandwichComponent } from './controllers/liste-sandwich.component';
import { SuggestionsComponent } from './controllers/suggestions.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import 'reflect-metadata';
import { FormsModule } from '@angular/forms';
import { RechercheComponent } from './controllers/recherche.component';
import { HeaderComponent } from './controllers/header.component';
import { RechercheModel } from './models/recherche.model';
import { PageNonExistanteComponent } from './controllers/page-non-existante.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    PanierComponent,
    IngredientsComponent,
    ListeSandwichComponent,
    SuggestionsComponent,
    RechercheComponent,
    HeaderComponent,
    PageNonExistanteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [
    AccueilModel,
    PanierModel,
    RechercheModel
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
