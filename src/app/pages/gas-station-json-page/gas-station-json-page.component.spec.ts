import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GasStationJSONPageComponent } from './gas-station-json-page.component';

describe('HelloWorldComponent', () => {
  let component: GasStationJSONPageComponent;
  let fixture: ComponentFixture<GasStationJSONPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GasStationJSONPageComponent]
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
