import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { SuggestionsComponent } from './accueil/suggestions/suggestions.component';
import { ListeSandwichComponent } from './accueil/liste-sandwich/liste-sandwich.component';
import { IngredientsComponent } from './accueil/ingredients/ingredients.component';
import { SelectionDirective } from './shared/directive/selection.directive';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    SuggestionsComponent,
    ListeSandwichComponent,
    IngredientsComponent,
    SelectionDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
