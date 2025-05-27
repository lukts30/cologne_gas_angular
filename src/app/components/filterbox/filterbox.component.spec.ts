import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterboxComponent } from './filterbox.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('FilterboxComponent', () => {
  let component: FilterboxComponent;
  let fixture: ComponentFixture<FilterboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterboxComponent, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
