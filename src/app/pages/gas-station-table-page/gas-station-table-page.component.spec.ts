import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GasStationTablePageComponent } from './gas-station-table-page.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('GasStationTablePageComponent', () => {
  let component: GasStationTablePageComponent;
  let fixture: ComponentFixture<GasStationTablePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GasStationTablePageComponent],
      providers: [        
        provideHttpClient(),
        provideHttpClientTesting(),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GasStationTablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
