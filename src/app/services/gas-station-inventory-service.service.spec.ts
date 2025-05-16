import { TestBed } from '@angular/core/testing';

import { GasStationInventoryService } from './gas-station-inventory-service.service';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { GasStationDatapoint } from '../interfaces/gas-station-datapoint';
import { provideHttpClient } from '@angular/common/http';

describe('GasStationInventoryService', () => {
  let service: GasStationInventoryService;
  let httpMock: HttpTestingController;

  const mockApiResponse = {
    features: [
      {
        attributes: {
          objectid: 1,
          adresse: 'Test Address 1',
        },
        geometry: {
          x: 6.95,
          y: 50.94,
        },
      },
      {
        attributes: {
          objectid: 2,
          adresse: 'Test Address 2',
        },
        geometry: {
          x: 7.01,
          y: 50.92,
        },
      }
    ]
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GasStationInventoryService,
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });

    service = TestBed.inject(GasStationInventoryService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should fetch and transform gas station data', () => {
    service.getGasStationData().subscribe((data: GasStationDatapoint[]) => {
      expect(data.length).toBe(2);
      expect(data[0]).toEqual({
        objectid: 1,
        adresse: 'Test Address 1',
        longitude: 6.95,
        latitude: 50.94,
      });
    });

    const req = httpMock.expectOne(service['apiUrl']);
    expect(req.request.method).toBe('GET');
    req.flush(mockApiResponse);
  });
});
