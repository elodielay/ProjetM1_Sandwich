import { Component, OnInit } from '@angular/core';
import { SandwichService } from 'src/app/shared/services/sandwich.service';
import { Sandwich } from '../../shared/models/sandwich.model';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css']
})
export class SuggestionsComponent implements OnInit {

  public sandwiches!: Sandwich[];
  public selectionSandwichSug: number = 0;

  constructor(private sandwichService: SandwichService) { }

  ngOnInit() {
    this.sandwichService.sandwichesSug.subscribe((sandwiches: Sandwich[]) => {
      this.sandwiches = sandwiches
    })
  }

  recupSandwich(index: number): void {
    this.selectionSandwichSug = index;
    this.sandwichService.selectSandwichSug(index);

  }

}
