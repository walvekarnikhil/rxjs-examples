import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteParamDataFilterComponent } from './route-param-data-filter.component';

describe('RouteParamDataFilterComponent', () => {
  let component: RouteParamDataFilterComponent;
  let fixture: ComponentFixture<RouteParamDataFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteParamDataFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteParamDataFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
