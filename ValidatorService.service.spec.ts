import { TestBed } from '@angular/core/testing';
import { ValidatorService } from '../service/ValidatorService.service';

describe('ValidatorService', () => {
  let service: ValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidatorService);
  });

  fit('should be created', () => {
    expect(service).toBeTruthy();
  });

  fit('should return true for a valid input', () => {
    const result = service.validatePositiveInteger(10);
    expect(result).toBe(true);
  });

  fit('should return false for an invalid input', () => {
    const result = service.validatePositiveInteger(3);
    expect(result).toBe(false);
  });
});
