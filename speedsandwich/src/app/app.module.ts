import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import 'reflect-metadata';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './controllers/accueil.component';
import { CompositionComponent } from './controllers/composition.component';
import { PanierComponent } from './controllers/panier.component';
import { IngredientsComponent } from './controllers/ingredients.component';
import { ListeSandwichComponent } from './controllers/liste-sandwich.component';
import { RechercheComponent } from './controllers/recherche.component';
import { HeaderComponent } from './controllers/header.component';
import { PageNonExistanteComponent } from './controllers/page-non-existante.component';
import { SuggestionsComponent } from './controllers/suggestions.component';
import { FooterComponent } from './controllers/footer.component';

import { AccueilModel } from './models/accueil.model';
import { CompositionModel } from './models/composition.model';
import { PanierModel } from './models/panier.model';
import { RechercheModel } from './models/recherche.model';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    CompositionComponent,
    PanierComponent,
    IngredientsComponent,
    ListeSandwichComponent,
    SuggestionsComponent,
    RechercheComponent,
    HeaderComponent,
    PageNonExistanteComponent, 
    FooterComponent
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
    CompositionModel,
    PanierModel,
    RechercheModel
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
