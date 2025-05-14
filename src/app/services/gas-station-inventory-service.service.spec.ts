import { TestBed } from '@angular/core/testing';

import { GasStationInventoryServiceService } from './gas-station-inventory-service.service';

describe('GasStationInventoryServiceService', () => {
  let service: GasStationInventoryServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GasStationInventoryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
