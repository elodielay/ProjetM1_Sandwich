import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './controllers/accueil.component';

import { PanierComponent } from './controllers/panier.component';
import { RechercheComponent } from './controllers/recherche.component';
import { CompositionComponent } from './controllers/composition.component';
import { PageNonExistanteComponent } from './controllers/page-non-existante.component';

const routes:Routes = [
  { path: '', component: AccueilComponent },
  { path: 'panier', component: PanierComponent },
  { path: 'search', component: RechercheComponent },
  { path: 'compose', component: CompositionComponent },
  { path: '**', component: PageNonExistanteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
