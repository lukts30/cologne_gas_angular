import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GasStationJSONPageComponent } from './gas-station-json-page.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('GasStationJSONPageComponent', () => {
  let component: GasStationJSONPageComponent;
  let fixture: ComponentFixture<GasStationJSONPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GasStationJSONPageComponent],
      providers: [        
        provideHttpClient(),
        provideHttpClientTesting(),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GasStationJSONPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
