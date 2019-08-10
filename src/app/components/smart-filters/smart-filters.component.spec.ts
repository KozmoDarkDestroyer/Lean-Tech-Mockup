import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartFiltersComponent } from './smart-filters.component';

describe('SmartFiltersComponent', () => {
  let component: SmartFiltersComponent;
  let fixture: ComponentFixture<SmartFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
