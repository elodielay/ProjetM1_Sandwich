import { Component, OnInit } from '@angular/core';
import { Sandwich } from 'src/app/shared/models/sandwich.model';
import { SandwichService } from 'src/app/shared/services/sandwich.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {

  public sandwich!: Sandwich;

  constructor(private sandwichService: SandwichService) { }


  ngOnInit() {
    this.sandwichService.sandwich.subscribe((sandwich: Sandwich) => {
      this.sandwich = sandwich
    })

    this.sandwichService.sandwichSug.subscribe((sandwich: Sandwich) => {
      this.sandwich = sandwich
    })
  }

}
