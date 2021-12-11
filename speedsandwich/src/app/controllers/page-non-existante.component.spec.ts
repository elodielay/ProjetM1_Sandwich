import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNonExistanteComponent } from './page-non-existante.component';

describe('PageNonExistanteComponent', () => {
  let component: PageNonExistanteComponent;
  let fixture: ComponentFixture<PageNonExistanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNonExistanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNonExistanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
