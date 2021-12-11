import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './controllers/accueil.component';
import { PageNonExistanteComponent } from './controllers/page-non-existante.component';
import { PanierComponent } from './controllers/panier.component';
import { RechercheComponent } from './controllers/recherche.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'panier', component: PanierComponent },
  { path:'search', component: RechercheComponent },
  { path: '**', component: PageNonExistanteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
