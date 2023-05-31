import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculationService {
  calculateMinimumNotes(amount: number): { denomination: number, quantity: number }[] {
    const denominations = [64, 32, 16, 8, 4, 2, 1];
    let remainingAmount = amount;
    const notes: { denomination: number, quantity: number }[] = [];

    for (const denomination of denominations) {
      const count = Math.floor(remainingAmount / denomination);
      if (count > 0) {
        notes.push({ denomination, quantity: count });
      }
      remainingAmount -= count * denomination;
    }

    return notes;
  }
}
