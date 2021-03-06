import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { Sandwich } from '../models/sandwich/sandwich';
import { PanierModel } from '../models/panier.model';
import {Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-panier',
  templateUrl: '../views/panier.component.html',
  styleUrls: ['../stylesheets/panier.component.css']
})

export class PanierComponent implements OnInit 
{

  sandwichs?:any[][];
  private sub:Subscription;
  public validation:boolean =true;

  constructor(private panier_model:PanierModel, public dialog: MatDialog)
  {
    this.sub = this.panier_model.panier_subject.subscribe(
      (sandwichs:any[][]) => {
        this.sandwichs = this.panier_model.articles;
      }
    );
  }

  ngOnInit()
  {
    this.panier_model.emitSandwichs();
  }

  getTotalPrice():number
  {
    return this.panier_model.getTotalPrice();
  }

  onAdd(index:number):void
  {
    this.panier_model.addByIndex(index);
  }
  onRemove(index:number):void
  {
    this.panier_model.removeByIndex(index);
  }

  onCommande():void
  {
 
    const adresse = (<HTMLInputElement>document.getElementById("adresse")).value;
    const nom = (<HTMLInputElement>document.getElementById("nom")).value;
    const prenom = (<HTMLInputElement>document.getElementById("prenom")).value;

    if (this.isNum(prenom)==false||this.isNum(nom)==false) {
      this.validation=false;
      alert("Veuillez saisir vos données.")
    }
    if (this.sandwichs!.length==0) {
      this.validation=false;
      alert("Pas de sandwich dans votre panier")
    }
    if (prenom.length<0||nom.length<0||adresse.length<0) {
      this.validation=false;
      alert("Veuillez saisir vos données.")
    }
    const numero = (<HTMLInputElement>document.getElementById("telephone")).value;
    if (this.checknum(numero)==false) {
        alert("Problème avec le numéro de téléphone")
        this.validation = false;
    }

    if (this.validation==true) {
      const dialogConfig = new MatDialogConfig();
      this.dialog.open(DialogContentExampleDialog, {
        data: { name: this.toString() },
      });
    } 
    if(this.validation==true){
      this.clearPanier();
      
    }
    
  }
  clearPanier():void
  {
    this.panier_model.articles=[];
    this.sandwichs = [];
  }
  isNum(val:string):boolean
  {
    let isnum = /^[a-zA-Z]+$/.test(val);
    return isnum;
  }
  toString():string
  {
    var final:string = "";
    const nom = (<HTMLInputElement>document.getElementById("nom")).value;
    const prenom = (<HTMLInputElement>document.getElementById("prenom")).value;
    final += "Voici votre commande "+nom.toUpperCase() + " " + prenom;
    this.sandwichs!.forEach(element => {
      final+=  element[0].toString() + (element[0].getPrice() * element[1]).toFixed(2) + "€" + " (x"+element[1]+")";
    });
    final.replace("\n", "<br>");
    return final;
  }
  checknum(num : string):boolean{
    var bon:boolean = false;
    var valide = new RegExp(/^0[1-9]\d{8}$/);
    if (valide.test(num)) {
      bon=true;
    }
    return bon;
  }
  isEmail(search:string):boolean
  {
    var serchfind:boolean=false;

    var regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    serchfind = regexp.test(search);

    console.log(serchfind)
    return serchfind
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: '../views/dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog
{
  constructor(@Inject(MAT_DIALOG_DATA) public data: {name: string}) {}
}
