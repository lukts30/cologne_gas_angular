import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GasStationListItemComponent } from './gas-station-list-item.component';

describe('GasStationListItemComponent', () => {
  let component: GasStationListItemComponent;
  let fixture: ComponentFixture<GasStationListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GasStationListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GasStationListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
