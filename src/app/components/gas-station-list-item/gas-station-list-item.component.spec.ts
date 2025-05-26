import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GasStationListItemComponent } from './gas-station-list-item.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('GasStationListItemComponent', () => {
  let component: GasStationListItemComponent;
  let fixture: ComponentFixture<GasStationListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        GasStationListItemComponent,
        RouterTestingModule
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(GasStationListItemComponent);
    fixture.componentRef.setInput('station',
      {
        objectid: 1,
        adresse: 'Test Address 1',
        longitude: 6.95,
        latitude: 50.94,
      }
    );

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
