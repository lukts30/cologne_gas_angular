import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GasStationDetailsPageComponent } from './gas-station-details-page.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('GasStationDetailsPageComponent', () => {
  let component: GasStationDetailsPageComponent;
  let fixture: ComponentFixture<GasStationDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GasStationDetailsPageComponent],
      providers: [        
        provideHttpClient(),
        provideHttpClientTesting(),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GasStationDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
