import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GasStationListPageComponent } from './gas-station-list-page.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('GasStationListPageComponent', () => {
  let component: GasStationListPageComponent;
  let fixture: ComponentFixture<GasStationListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GasStationListPageComponent, RouterTestingModule,],
      providers: [        
        provideHttpClient(),
        provideHttpClientTesting(),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GasStationListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
