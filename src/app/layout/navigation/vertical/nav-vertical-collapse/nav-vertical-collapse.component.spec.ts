import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavVerticalCollapseComponent } from './nav-vertical-collapse.component';

describe('NavVerticalCollapseComponent', () => {
  let component: NavVerticalCollapseComponent;
  let fixture: ComponentFixture<NavVerticalCollapseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavVerticalCollapseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavVerticalCollapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
