import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GasStationListPageComponent } from './gas-station-list-page.component';

describe('MyPageComponent', () => {
  let component: GasStationListPageComponent;
  let fixture: ComponentFixture<GasStationListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GasStationListPageComponent]
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
