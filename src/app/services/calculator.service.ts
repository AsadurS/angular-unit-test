import { Injectable } from '@angular/core';
import { LogerService } from './loger.service';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(private logerService:LogerService) { }

  add(n1: number, n2: number): number {
    this.logerService.log('Add Operation is called')
    return n1 + n2;
  }

  sub(n1: number, n2: number): number {
    this.logerService.log('Sub Operation is called')
    return n1 - n2;
  }
}
