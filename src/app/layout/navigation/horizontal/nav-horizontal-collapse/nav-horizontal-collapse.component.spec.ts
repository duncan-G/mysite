import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavHorizontalCollapseComponent } from './nav-horizontal-collapse.component';

describe('NavHorizontalCollapseComponent', () => {
  let component: NavHorizontalCollapseComponent;
  let fixture: ComponentFixture<NavHorizontalCollapseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavHorizontalCollapseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavHorizontalCollapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
