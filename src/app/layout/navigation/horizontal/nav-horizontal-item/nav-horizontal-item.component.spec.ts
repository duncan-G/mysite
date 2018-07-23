import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavHorizontalItemComponent } from './nav-horizontal-item.component';

describe('NavHorizontalItemComponent', () => {
  let component: NavHorizontalItemComponent;
  let fixture: ComponentFixture<NavHorizontalItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavHorizontalItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavHorizontalItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
