import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoUnsubscribeContentTestComponent } from './until-destroyed-content-test.component';

describe('AutoUnsubscribeContentTestComponent', () => {
  let component: AutoUnsubscribeContentTestComponent;
  let fixture: ComponentFixture<AutoUnsubscribeContentTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoUnsubscribeContentTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoUnsubscribeContentTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
