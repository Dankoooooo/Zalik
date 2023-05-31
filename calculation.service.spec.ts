import { TestBed } from '@angular/core/testing';
import { CalculationService } from './calculation.service';

describe('CalculationService', () => {
  let service: CalculationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculationService);
  });

  fit('should be created', () => {
    expect(service).toBeTruthy();
  });

  fit('should calculate minimum notes correctly', () => {
    const result = service.calculateMinimumNotes(100);
    expect(result.length).toBe(7);

    expect(result[0].denomination).toBe(64);
    expect(result[0].quantity).toBe(1);

    expect(result[1].denomination).toBe(32);
    expect(result[1].quantity).toBe(1);

    expect(result[2].denomination).toBe(16);
    expect(result[2].quantity).toBe(1);

    expect(result[3].denomination).toBe(8);
    expect(result[3].quantity).toBe(1);

    expect(result[4].denomination).toBe(4);
    expect(result[4].quantity).toBe(1);

    expect(result[5].denomination).toBe(2);
    expect(result[5].quantity).toBe(0);

    expect(result[6].denomination).toBe(1);
    expect(result[6].quantity).toBe(0);
  });

  fit('should return empty array for zero amount', () => {
    const result = service.calculateMinimumNotes(0);
    expect(result.length).toBe(0);
  });
});
