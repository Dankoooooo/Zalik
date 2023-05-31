import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ValidatorService } from './service/ValidatorService.service';
import { CalculationService } from '../myform/service/calculation.service';
interface Note {
  denomination: number;
  count: number;
}

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.scss'],
  
})
export class MyformComponent implements OnInit {
  number: number;
  minimumNotes: { denomination: number, quantity: number }[];

  constructor(private validatorService: ValidatorService,private calculationService: CalculationService) {
    this.number = 0;
    this.minimumNotes = [];
  }


  calculateMinimumNotes() {
    if (!this.validatorService.validatePositiveInteger(this.number)) {
          alert('Please enter a positive integer.');
          return;
        }
    this.minimumNotes = this.calculationService.calculateMinimumNotes(this.number);
  }

  // calculateMinimumNotes() {
  //   if (!this.validatorService.validatePositiveInteger(this.number)) {
  //     alert('Please enter a positive integer.');
  //     return;
  //   }
  //   const denominations = [64, 32, 16, 8, 4, 2, 1];
  //   let remainingAmount = this.number;
  //   let noteCount = 0;
  //   const notes: Note[] = [];

  //   for (const denomination of denominations) {
  //     const count = Math.floor(remainingAmount / denomination);
  //     noteCount += count;
  //     remainingAmount -= count * denomination;

  //     if (count > 0) {
  //       notes.push({ denomination, count });
  //     }
  //   }

  //   this.minimumNotes = noteCount;
  //   this.minimumNotesArray = notes;
  // }

  ngOnInit() {}
}
