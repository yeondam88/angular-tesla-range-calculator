/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BatteryService } from './tesla-battery.service';

describe('Service: TeslaBattery', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BatteryService]
    });
  });

  it('should ...', inject([BatteryService], (service: BatteryService) => {
    expect(service).toBeTruthy();
  }));
});
