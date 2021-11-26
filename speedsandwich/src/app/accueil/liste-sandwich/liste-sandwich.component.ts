import { Component, OnInit } from '@angular/core';
import { SandwichService } from 'src/app/shared/services/sandwich.service';
import { Sandwich } from '../../shared/models/sandwich.model';

@Component({
  selector: 'app-liste-sandwich',
  templateUrl: './liste-sandwich.component.html',
  styleUrls: ['./liste-sandwich.component.css']
})
export class ListeSandwichComponent implements OnInit {

  public sandwiches!: Sandwich[];
  public selectionSandwich: number = 0;

  constructor(private sandwichService: SandwichService) { }

  ngOnInit() {
    this.sandwichService.sandwiches.subscribe((sandwiches: Sandwich[]) => {
      this.sandwiches = sandwiches
    })
  }

  recupSandwich(index: number): void {
    this.selectionSandwich = index;
    this.sandwichService.selectSandwich(index);

  }

}
