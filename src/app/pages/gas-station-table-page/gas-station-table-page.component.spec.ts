import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GasStationTablePageComponent } from './gas-station-table-page.component';

describe('GasStationTablePageComponent', () => {
  let component: GasStationTablePageComponent;
  let fixture: ComponentFixture<GasStationTablePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GasStationTablePageComponent]
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
