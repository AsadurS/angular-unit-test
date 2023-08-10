import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService test', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('In add method return shoud be 11', ()=>{
     expect(service.add(8,3)).toBe(11)
  })
  it('In sub method return shoud be 5', ()=>{
    expect(service.sub(8,3)).toBe(5)
 })
 
});
