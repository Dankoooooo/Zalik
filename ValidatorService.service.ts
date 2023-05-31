import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor() { }

  validatePositiveInteger(number: number): boolean {
    return number > 0 && Number.isInteger(number);
  }
}
