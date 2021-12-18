import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeSandwichComponent } from './liste-sandwich.component';

describe('ListeSandwichComponent', () => {
  let component: ListeSandwichComponent;
  let fixture: ComponentFixture<ListeSandwichComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeSandwichComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeSandwichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
