import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PanierComponent } from './panier.component';
import { PanierModel } from '../models/panier.model';
import {MatDialog} from "@angular/material/dialog";
import {Subject} from "rxjs";
import {Sandwich} from "../models/sandwich/sandwich";

describe('PanierComponent', () => {
  let component: PanierComponent;
  let fixture: ComponentFixture<PanierComponent>;

  let panierModelStub: Partial<PanierModel>;
  let matDialogStub: Partial<MatDialog>;
  let sandTest: Partial<Sandwich>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanierComponent ],
      providers:[
        {provide: PanierModel, useValue: panierModelStub},
        {provide: MatDialog, useValue: matDialogStub},
        {provide: Sandwich, useValue: sandTest}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    panierModelStub = {
      panier_subject: new Subject<Sandwich[]>()
    };
    sandTest = {
      name: "testNom",
      image: "testImage",
      ingredients:[]
    };
    fixture = TestBed.createComponent(PanierComponent);
    component = fixture.componentInstance;

    panierModelStub = fixture.debugElement.injector.get(PanierModel);

    panierModelStub = TestBed.inject(PanierModel);

    fixture.detectChanges();
  });

  it('should return a String', () => {
    const comp = new PanierComponent(<PanierModel>panierModelStub, <MatDialog>matDialogStub);
    expect(comp.toString).toBe("String");
  });
});
